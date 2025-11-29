'use client'

import React from 'react'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/motion/FadeUp'
import Heading from '@/components/shared/Heading'
import Badge from '@/components/shared/Badge'
import Text from '@/components/shared/Text'
import Button from '@/components/shared/Button'
import { ordersData } from '@/data/orders'

export default function DashboardPage() {
  const { isLoaded, user } = useUser()

  // Loading State
  if (!isLoaded || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
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
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#3D3D3D1A] pb-8">
                    <div>
                        <Badge text="Dashboard" src="/icon/auth/join.png" />
                        <Heading 
                            text={`Welcome back, ${user.firstName || 'User'}!`} 
                            className="text-[32px] md:text-[48px] mt-4 leading-tight"
                        />
                        <Text text="Manage your profile and view your recent orders below." />
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* LEFT COL: User Profile */}
                    <div className="lg:col-span-1 h-fit">
                        <div className="bg-white border-[2px] border-[#3D3D3D1A] rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center gap-4 shadow-sm sticky top-28">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-50">
                                <Image 
                                    src={user.imageUrl} 
                                    alt="Profile" 
                                    width={100} 
                                    height={100} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold font-RecoletaMedium">{user.fullName}</h3>
                                <p className="text-[#777] text-sm font-medium">{user.primaryEmailAddress?.emailAddress}</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-100 my-2"></div>

                            <div className="w-full flex flex-col gap-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Member Since</span>
                                    <span className="font-semibold">{user.createdAt ? new Date(user.createdAt).getFullYear() : '2025'}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Status</span>
                                    <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-md">Active</span>
                                </div>
                            </div>
                            
                            {/* Manage Account Link */}
                            <Link href="/user-profile" className="w-full">
                                <Button 
                                    className="w-full justify-center mt-2 bg-black text-white border-black hover:bg-gray-800"
                                >
                                    Manage Account
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COL: Orders */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <Heading text="Recent Orders" className="text-2xl" />

                        {ordersData.length > 0 ? (
                            ordersData.map((order) => (
                                <div key={order.id} className="bg-white border border-[#3D3D3D1A] rounded-[20px] p-6 transition-all hover:shadow-md">
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6 border-b border-dashed border-gray-200 pb-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-lg">{order.id}</span>
                                            <span className="text-gray-500 text-sm">{order.date}</span>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <Badge 
                                                text={order.status} 
                                                className={`
                                                    ${order.status === 'Delivered' ? 'bg-green-100 text-green-700 border-green-200' : ''}
                                                    ${order.status === 'Processing' ? 'bg-amber-100 text-amber-700 border-amber-200' : ''}
                                                    ${order.status === 'Cancelled' ? 'bg-red-100 text-red-700 border-red-200' : ''}
                                                `} 
                                            />
                                            <span className="font-bold mt-1">{order.total}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {order.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0">
                                                    <Image 
                                                        src={item.image} 
                                                        alt={item.name} 
                                                        width={64} 
                                                        height={64} 
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-[#3D3D3D]">{item.name}</p>
                                                    <p className="text-sm text-gray-500">Qty: 1</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex justify-end">
                                        <button className="text-sm font-semibold text-[#535353] hover:text-amber-600 transition-colors">
                                            View Invoice &rarr;
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 bg-white rounded-[20px] border border-[#3D3D3D1A]">
                                <Text text="No orders found yet." />
                                <Link href="/" className="mt-4 inline-block">
                                    <Button>Start Shopping</Button>
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </FadeUp>
      </div>
    </div>
  )
}