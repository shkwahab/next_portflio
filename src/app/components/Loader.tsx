import React from 'react'
import Image from 'next/image'
const Loader = () => {
  return (
    <React.Fragment>
        <div className='  animate-pulse h-screen flex z-[999999] justify-center'>
            <Image src={"/logo.svg"} alt='loader' width={100} height={100}/>
        </div>
    </React.Fragment>
  )
}

export default Loader