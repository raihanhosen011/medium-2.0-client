import Image from 'next/legacy/image'
import React from 'react'
//
import Button from '@components/Button'


const Success = () => {
  return (
    <div className='__sucess' >
        <div className='w-[60px] relative overflow-hidden mx-auto' >
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

        <p className='font-medium text-[20px] md:text-[25px] max-w-[400px] text-slate-700 my-6' > Congratulation! Your account has been active </p>

        <Button href='/profile' > Go to profile </Button>
    </div>
  )
}

export default Success