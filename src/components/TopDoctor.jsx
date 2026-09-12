import React from 'react'
import { useContext } from 'react'
// import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctor = () => {
  const navigate = useNavigate()
const{doctors}=useContext(AppContext);
  return (
    <div className='flex flex-col items-center gap-6 py-16 px-4 md:px-10 bg-white rounded-[40px] my-10'>

      {/* Heading */}
      <div className='text-center max-w-2xl'>
        <h1 className='text-3xl md:text-[40px] font-bold tracking-tight'>
          Top Doctors to <span className='bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent'>Book</span>
        </h1>
        <p className='mt-3 text-gray-500 text-sm md:text-[15px]'>
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 pt-8'>
        {doctors.slice(0,10).map((item,index)=>(
          <div
            key={index}
            onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
            className='group bg-[#f8f9ff] border border-indigo-50 rounded-[24px] overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 hover:bg-white transition-all duration-500'
          >
            {/* Image */}
            <div className='relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50'>
              <img className='w-full h-[200px] object-cover object-top group-hover:scale-110 transition-transform duration-700' src={item.image} alt="" />

              {/* Available Badge - Floating */}
              <div className='absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-white'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                <p className='text-[11px] font-semibold text-green-600'>Available</p>
              </div>

              {/* Fav Icon */}
              <div className='absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity'>
                <span className='text-sm'>♡</span>
              </div>
            </div>

            {/* Content */}
            <div className='p-4'>
              <div className='flex items-center justify-between'>
                <p className='text-gray-900 font-bold text-[15px] truncate'>{item.name}</p>
                <span className='text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium'>{item.speciality.slice(0,3)}</span>
              </div>
              <p className='text-gray-500 text-[13px] mt-1 truncate'>{item.speciality}</p>

              {/* Rating */}
              <div className='flex items-center gap-1 mt-2.5'>
                <span className='text-amber-400 text-xs'>★★★★★</span>
                <span className='text-[11px] text-gray-400'>4.9 (120)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Button - Premium */}
      <button
        onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}
        className='mt-8 group flex items-center gap-2 bg-[#f1f3ff] hover:bg-primary text-gray-700 hover:text-white px-10 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 hover:scale-105'
      >
        Explore All Doctors
        <span className='group-hover:translate-x-1 transition-transform'>→</span>
      </button>
    </div>
  )
}

export default TopDoctor