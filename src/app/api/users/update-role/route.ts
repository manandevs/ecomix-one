import { clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { Role } from '@/types/next-auth'

export async function POST(request: Request) {
  try {
    const { userId: currentUserId } = await auth()
    
    if (!currentUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { userId, role }: { userId: string; role: Role } = await request.json()
    
    // Validate role
    const validRoles: Role[] = ['user', 'seller', 'moderator', 'manager', 'admin']
    if (!validRoles.includes(role)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
    }

    const client = await clerkClient()
    
    // Check if trying to assign manager role
    if (role === 'manager') {
      const users = await client.users.getUserList()
      const existingManager = users.data.find(
        user => user.publicMetadata?.role === 'manager' && user.id !== userId
      )
      
      if (existingManager) {
        return NextResponse.json({ 
          error: 'Only one manager role is allowed. Current manager must be demoted first.' 
        }, { status: 400 })
      }
    }

    // Get current user to check permissions
    const currentUser = await client.users.getUser(currentUserId)
    const currentUserRole = currentUser.publicMetadata?.role as Role | undefined
    
    // Only admins can assign roles
    if (currentUserRole !== 'admin') {
      return NextResponse.json({ error: 'Only admins can update roles' }, { status: 403 })
    }

    // Update user role in publicMetadata
    await client.users.updateUser(userId, {
      publicMetadata: { role }
    })

    return NextResponse.json({ success: true, role })
  } catch (error) {
    console.error('Error updating role:', error)
    return NextResponse.json({ error: 'Failed to update role' }, { status: 500 })
  }
}