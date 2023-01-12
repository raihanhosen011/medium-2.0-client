import Image from 'next/legacy/image'
import React from 'react'
//
import Button from '@components/Button'


const ByLink = () => {
  return (
    <div className='flex items-center justify-center flex-col' >

        <div className='min-w-[60px] relative overflow-hidden mx-auto' >
           <Image
              src="/icons/img/check.png" 
              blurDataURL="/icons/img/check.png"
              layout='responsive'
              width={1}
              height={1}
              objectFit='contain'
              quality={100}
              alt='loading...' 
           />
        </div>

        <p className='font-medium text-center text-[16px] md:text-[19px] min-w-[570px] text-slate-600 my-6' > Your account has been successfully created. Please check your <b>email</b> and verify to active your account </p>

        <Button href='/' > OK </Button>

    </div>
  )
}

export default ByLink