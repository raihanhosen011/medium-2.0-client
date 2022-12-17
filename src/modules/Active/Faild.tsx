import Link from 'next/link'
import Image from 'next/legacy/image'
import React from 'react'


const Faild = () => {
  return (
    <div className='__sucess' >
        <div className='w-[60px] relative overflow-hidden mx-auto' >
           <Image
              src="/icons/img/error.png" 
              blurDataURL="/icons/img/error.png"
              layout='responsive'
              width={1}
              height={1}
              objectFit='contain'
              quality={100}
              alt='loading...' 
           />
        </div>

        <p className='font-medium text-[17px] md:text-[20px] max-w-[450px] text-slate-700 my-6' > 
            Authentication failure. Please try <Link href='/register' className='text-red-600' > Again </Link>
        </p>
    </div>
  )
}

export default Faild