import React from 'react'

const Itservice = ({img,title,description,feature1,feature2,feature3}) => {
  return (
    <div className='border-1 w-96 px-4 py-3 rounded-md '>

       <div className='w-full h-58'> <img src={img} className='rounded-md w-full h-full' alt="" /></div>
        <h1 className='text-2xl mt-5'>{title}</h1>
        <h4 className='text-base mt-2'>{description}</h4>

        <div className='mt-4'>
           <h1 className='text-amber-200 font-semibold'>Key Features :</h1>
           <div className='flex gap-x-1 items-center'>
            <h1 className='w-2 h-2 bg-[#c0c0c0] rounded-md'></h1>
           <h4 className='pl-2'> {feature1}</h4>
           </div>

           <div className='flex gap-x-1 items-center'>
            <h1 className='w-2 h-2 bg-[#c0c0c0] rounded-md'></h1>
           <h4 className='pl-2'>{feature2}</h4>
           </div>

             <div className='flex gap-x-1 items-center'>
            <h1 className='w-2 h-2 bg-[#c0c0c0] rounded-md'></h1>
           <h4 className='pl-2 '>{feature3}</h4>
             </div>
        </div>
    </div>
  )
}

export default Itservice