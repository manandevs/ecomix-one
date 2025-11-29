'use client'

import { UserProfile } from '@clerk/nextjs'
import React from 'react'

export default function UserProfilePage() {
  return (
    <div className="w-full min-h-screen flex justify-center py-10 px-4">
      <UserProfile 
        path="/user-profile" 
        routing="path"
        appearance={{
            elements: {
                rootBox: "w-full max-w-4xl",
                card: "w-full shadow-none border border-[#3D3D3D1A] rounded-[24px]"
            }
        }}
      />
    </div>
  )
}