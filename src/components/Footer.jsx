import React from 'react'

const Footer = () => {

  const getYear = new Date().getFullYear()

  return (
    <div className='text-center p-10 mt-10 border-t border-gray-300'>
      <h1>
        {getYear} mondsGoogl, Inc.
      </h1>
    </div>
  )
}

export default Footer