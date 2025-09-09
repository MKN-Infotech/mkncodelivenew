import React from 'react'

const Abouttemplate = ({num,title}) => {
  return (
    <div className='border-2 border-[#c0c0c0] p-5 w-80 rounded-xl duration-500 hover:text-amber-200  hover:shadow-amber-200 shadow-lg hover:scale-110  text-center '>
        <div className='border-1 border-[#c0c0c0] w-fit px-2 rounded-lg mt-4 '>
            <h1>{num}</h1>
        </div>
        <h1 className='mt-10 text-2xl font-semibold '>{title}</h1>
    </div>
  )
}

export default Abouttemplate