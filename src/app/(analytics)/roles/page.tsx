'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { HiSearch } from 'react-icons/hi'
import { FaUserShield, FaStore, FaUser, FaUserTie, FaGavel } from 'react-icons/fa'
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri"

// Shared UI Imports
import FadeUp from '@/components/motion/FadeUp'
import Heading from '@/components/shared/Heading'
import Badge from '@/components/shared/Badge'
import Text from '@/components/shared/Text'
import Button from '@/components/shared/Button'
import Table, { Column } from '@/components/shared/Table'

// Types
import { Role } from '@/types'

// --- Types ---
type UserData = {
  id: string
  name: string
  email: string
  image: string
  role: Role
  lastActive: string
  status: 'Active' | 'Inactive'
}

export default function RolesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [users, setUsers] = useState<UserData[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch users from Clerk
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  // Filter Logic
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [users, searchQuery])

  const handleRoleUpdate = async (userId: string, newRole: Role) => {
    // Check if trying to assign manager role
    if (newRole === 'manager') {
      const existingManager = users.find(u => u.role === 'manager' && u.id !== userId)
      if (existingManager) {
        alert(`Only one manager is allowed. ${existingManager.name} is currently the manager.`)
        setEditingId(null)
        return
      }
    }

    try {
      const response = await fetch('/api/users/update-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, role: newRole })
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.error || 'Failed to update role')
        setEditingId(null)
        return
      }

      setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u))
      setEditingId(null)
    } catch (error) {
      console.error('Error updating role:', error)
      alert('Failed to update role')
      setEditingId(null)
    }
  }

  const columns: Column<UserData>[] = [
    {
      header: "User",
      cell: (user) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <Image src={user.image} alt={user.name} width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-[#3D3D3D]">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      )
    },
    {
      header: "Role",
      cell: (user) => editingId === user.id ? (
        <div className="relative z-10">
          <select
            className="appearance-none bg-white border border-amber-300 rounded-[14px] px-3 py-1.5 text-xs font-bold uppercase tracking-wider outline-none focus:ring-2 ring-amber-100 w-32 cursor-pointer shadow-sm"
            defaultValue={user.role}
            onChange={(e) => handleRoleUpdate(user.id, e.target.value as Role)}
            onBlur={() => setEditingId(null)}
            autoFocus
          >
            <option value="user">User</option>
            <option value="seller">Seller</option>
            <option value="moderator">Moderator</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      ) : (
        <Badge onClick={() => setEditingId(user.id)} text={user.role} />
      )
    },
    {
      header: "Status",
      cell: (user) => (
        <Badge className='w-fit' text={user.status} />
      )
    },
    {
      header: "Last Active",
      accessorKey: "lastActive",
      className: "text-sm text-gray-500 font-medium"
    },
    {
      header: "Actions",
      className: "text-right",
      cell: (user) => (
        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setEditingId(user.id)}
            className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all"
            title="Edit Role"
          >
            <RiEditLine size={18} />
          </button>
          <button
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            title="Remove User"
          >
            <RiDeleteBinLine size={18} />
          </button>
        </div>
      )
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Blobs */}
      <div className="bg-amber-600/10 size-[300px] blur-[150px] absolute top-20 right-0 -z-10 pointer-events-none"></div>
      <div className="bg-[#A2EA13]/10 size-[300px] blur-[150px] absolute bottom-0 left-0 -z-10 pointer-events-none"></div>

      <div className="max-w-[1210px] mx-auto px-5 pt-[120px] pb-20">
        <FadeUp>
          <div className="flex flex-col gap-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#3D3D3D1A] pb-8">
              <div>
                <Badge text="Management" src="/icon/auth/team.png" />
                <Heading
                  text="User Roles & Permissions"
                  className="text-[32px] md:text-[48px] mt-4 leading-tight"
                />
                <Text text="Manage access levels and permissions for your team members and customers." />
              </div>
              <Button className="bg-black text-white border-black hover:bg-gray-800">
                Invite New Member
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { role: 'Admin', count: users.filter(u => u.role === 'admin').length, desc: 'Full Access', icon: <FaUserShield /> },
                { role: 'Manager', count: users.filter(u => u.role === 'manager').length, desc: 'Super Operations', icon: <FaUserTie /> },
                { role: 'Seller', count: users.filter(u => u.role === 'seller').length, desc: 'Inventory Mgmt', icon: <FaStore /> },
                { role: 'Moderator', count: users.filter(u => u.role === 'moderator').length, desc: 'Content Control', icon: <FaGavel /> },
                { role: 'User', count: users.filter(u => u.role === 'user').length, desc: 'Standard Access', icon: <FaUser /> },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#3D3D3D1A] p-4 rounded-[20px] flex flex-col gap-2 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center justify-start text-2xl gap-2">
                      <span className="p-2 rounded-lg bg-gray-50 text-amber-600 shadow">
                        {item.icon}
                      </span>
                      <h4 className="font-bold font-RecoletaMedium">{item.role}</h4>
                    </div>
                    <span className="font-bold text-2xl font-RecoletaMedium">{item.count}</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 indent-12">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Search Toolbar */}
            <div className="flex justify-between items-center bg-white p-2 rounded-[16px] border border-[#3D3D3D1A]">
              <div className="relative w-full md:w-[400px]">
                <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-[12px] border-none bg-transparent focus:outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="px-4 text-sm text-gray-500 font-medium hidden md:block">
                {filteredUsers.length} Users found
              </div>
            </div>

            {/* The Shared Table Component */}
            <Table
              data={filteredUsers}
              columns={columns}
              keyExtractor={(user) => user.id}
              emptyMessage={`No users found matching "${searchQuery}"`}
            />
          </div>
        </FadeUp>
      </div>
    </div>
  )
}