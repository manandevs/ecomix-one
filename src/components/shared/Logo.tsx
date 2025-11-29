import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <Image
                src={'/Ecomix-Cone_Logo_Amber_Final.png'}
                alt='Ecomix-Cone Logo'
                width={34}
                height={39}
                className='w-[31px] h-[35px] md:w-[34px] md:h-[39px]'
            />
            <span className='font-semibold text-xl font-RecoletaMedium'>
                ecomixOne
            </span>
        </div>
    )
}

export default Logo