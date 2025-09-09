import React from 'react'

const Scroll = ({title,desc}) => {
  return (
    <div className='bg-black text-white shadow-lg px-4 py-2 rounded-md'>
      <h1 className='text-xl'>{title}</h1>
      <h3 className='text-[#c0c0c0] mt-2'>{desc}</h3>
    </div>
  )
}

export default Scroll