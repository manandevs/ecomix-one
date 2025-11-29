import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
  return (
    <div className='min-h-screen w-full relative overflow-hidden flex justify-center items-center py-36 px-4'>
      
      {/* Background Blobs matching Home Page */}
      <div className="bg-amber-600/20 size-[200px] lg:size-[320px] blur-[200px] md:blur-[300px] z-[1] absolute top-0 right-0"></div>
      <div className="bottom-0 left-0 bg-[#A2EA13]/20 blur-[200px] absolute z-[1] size-[200px] md:size-[340px]"></div>
      
      {/* Content */}
      <div className="relative z-[10] w-full flex justify-center">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout