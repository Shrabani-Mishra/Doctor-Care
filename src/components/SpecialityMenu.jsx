import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-6 py-20 px-4'>

      {/* Heading */}
      <div className='text-center max-w-2xl'>
        
        <h1 className='text-3xl md:text-[40px] font-bold tracking-tight leading-tight'>
          Find by <span className='bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent'>Speciality</span>
        </h1>
        <p className='mt-4 text-gray-500 text-sm md:text-[15px] leading-relaxed'>
          Simply browse through our extensive list of trusted doctors, <br className='hidden md:block'/> schedule your appointment hassle-free.
        </p>
      </div>

      {/* Cards */}
      <div className='flex gap-5 md:gap-8 pt-8 w-full overflow-x-auto scrollbar-hide px-2 md:justify-center pb-4'>
        {specialityData.map((item,index)=>(
            <Link
                key={index}
                to={`/doctors/${item.speciality}`}
                onClick={()=>scrollTo(0,0)}
                className='group flex flex-col items-center gap-4 min-w-[110px] cursor-pointer'
            >
                {/* Image Circle with Hover Effect */}
                <div className='w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-[28px] flex items-center justify-center border border-indigo-50 shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-100 group-hover:bg-white group-hover:scale-110 group-hover:-translate-y-2 group-hover:rounded-[32px] transition-all duration-500 ease-out relative overflow-hidden'>
                    {/* Hover Gradient */}
                    <div className='absolute inset-0 bg-gradient-to-br from-primary/0 to-indigo-100/0 group-hover:from-primary/5 group-hover:to-indigo-100/50 transition-all duration-500'></div>
                    <img className='w-14 md:w-16 group-hover:scale-110 transition-transform duration-500 relative z-10' src={item.image} alt="" />
                </div>

                <p className='text-[13px] md:text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors tracking-wide'>{item.speciality}</p>

               
            </Link>
        ))}
      </div>

      {/* Bottom line design */}
      <div className='w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-4'></div>
    </div>
  )
}

export default SpecialityMenu