import React from 'react'
import notFound from"../public/undraw_page_not_found_re_e9o6.svg"
import Image from 'next/image'

const notfound = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <Image src={notFound} width={500} alt='' />
    </div>
  )
}

export default notfound