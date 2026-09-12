import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='relative flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-[#5f6FFF] via-[#7c86ff] to-[#4a5af5] rounded-[24px] md:rounded-[40px] px-6 md:px-12 lg:px-16 mt-6 overflow-hidden shadow-2xl shadow-indigo-200'>

      {/* Decorative Blurs - Makes it attractive */}
      <div className='absolute top-[-100px] left-[-100px] w-72 h-72 bg-white/20 rounded-full blur-[80px]'></div>
      <div className='absolute bottom-[-80px] right-[20%] w-96 h-96 bg-indigo-300/30 rounded-full blur-[100px]'></div>

      {/* ---------Left side----- */}
      <div className='md:w-[55%] flex flex-col items-start justify-center gap-6 py-12 md:py-[7vw] relative z-10'>

          {/* Top Badge */}
          <div className='flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-medium tracking-wide'>
            <span className='w-2 h-2 bg-green-300 rounded-full animate-pulse'></span>
            500+ Doctors Online Now
          </div>

          <p className='text-[32px] md:text-[52px] lg:text-[58px] text-white font-bold leading-[1.1] tracking-tight'>
            Book Appointment <br/>
            <span className='text-white/90'>With Trusted</span> <br/>
            <span className='bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent'>Doctors.</span>
          </p>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2'>
            <div className='flex -space-x-3'>
                <img className='w-10 h-10 rounded-full border-2 border-white shadow-md' src={assets.group_profiles} alt="" />
                
                <div className='w-10 h-10 rounded-full border-2 border-white bg-white text-primary flex items-center justify-center text-xs font-bold shadow-md'>+5k</div>
            </div>
            <p className='text-white/90 text-[13px] md:text-sm leading-relaxed max-w-[280px] font-light'>
              Trusted by 50,000+ patients. <br/>Schedule your appointment in 30 seconds.
            </p>
          </div>

          <div className='flex items-center gap-4 mt-4'>
            <a href='#speciality' className='group flex items-center gap-3 bg-white px-8 py-4 rounded-full text-gray-900 text-[15px] font-semibold hover:shadow-2xl hover:shadow-black/20 hover:scale-105 active:scale-95 transition-all duration-300'>
                Book appointment
                <span className='w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors'>
                    <img className='w-3 invert group-hover:translate-x-0.5 transition-transform' src={assets.arrow_icon} alt="" />
                </span>
            </a>
            <div className='hidden md:flex items-center gap-2 text-white/80 text-xs'>
                <span>⭐ 4.9/5</span>
                <span className='opacity-50'>•</span>
                <span>12k Reviews</span>
            </div>
          </div>

          {/* Stats */}
          <div className='flex gap-8 mt-6 pt-6 border-t border-white/20 w-full md:w-auto'>
            <div><p className='text-white font-bold text-xl'>50k+</p><p className='text-white/70 text-xs'>Patients</p></div>
            <div><p className='text-white font-bold text-xl'>500+</p><p className='text-white/70 text-xs'>Doctors</p></div>
            <div><p className='text-white font-bold text-xl'>98%</p><p className='text-white/70 text-xs'>Satisfaction</p></div>
          </div>
      </div>

      {/* --------Right Side------- */}
      <div className='md:w-[45%] relative flex items-end justify-center'>
        {/* Floating Card */}
        <div className='hidden lg:flex absolute top-[18%] left-0 bg-white rounded-2xl p-3 shadow-xl gap-3 items-center animate-bounce' style={{animationDuration:'3s'}}>
            <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>✅</div>
            <div><p className='text-xs text-gray-500'>Appointment</p><p className='text-sm font-bold'>Confirmed!</p></div>
        </div>

        <img className='w-[85%] md:w-full md:absolute bottom-0 h-auto z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-transform duration-500' src={assets.header_img} alt="" />

        
      
      </div>

    </div>
  )
}

export default Header