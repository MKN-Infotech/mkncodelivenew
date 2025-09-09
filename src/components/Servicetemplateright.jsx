import React from 'react'

const Servicetemplateright = ({title,desc,img}) => {
  return (
      <div className='w-full flex gap-x-12 px-24 h-80'>
        <div className=' w-2/3 mt-20 text-center'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <h2 className='text-2xl mt-8  font-thin'>{desc}</h2>
        </div>
        <div className=' w-1/2 '>
            <img className='w-full h-full object-cover rounded-xl duration-300 hover:scale-105 ' src={img} alt="" />
        </div>
    </div>
  )
}

export default Servicetemplateright