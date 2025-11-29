import { clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { Role } from '@/types/next-auth'

export async function GET() {
  try {
    const client = await clerkClient()
    const users = await client.users.getUserList()
    
    const formattedUsers = users.data.map(user => ({
      id: user.id,
      name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown User',
      email: user.emailAddresses[0]?.emailAddress || '',
      image: user.imageUrl || '/default-avatar.png',
      role: (user.publicMetadata?.role as Role) || 'user',
      lastActive: user.lastSignInAt 
        ? new Date(user.lastSignInAt).toLocaleDateString() 
        : 'Never',
      status: (user.lastSignInAt && 
              (Date.now() - new Date(user.lastSignInAt).getTime() < 7 * 24 * 60 * 60 * 1000) 
              ? 'Active' 
              : 'Inactive') as 'Active' | 'Inactive'
    }))
    
    return NextResponse.json(formattedUsers)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}