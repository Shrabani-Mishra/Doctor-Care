import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const[showMenu,setShowMenu]=useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between py-4 px-2 md:px-4 sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100'>
     
     {/* Logo with glow */}
     <div className='flex items-center gap-2 cursor-pointer group' onClick={()=>navigate('/')}>
        <div className='w-9 h-9 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:shadow-xl group-hover:shadow-indigo-300 transition-all'>
            <span className='text-white font-bold text-lg'>D</span>
        </div>
        <img className='w-36 cursor-pointer hidden md:block' src={assets.logo3} alt="logo1" />
        <span className='md:hidden font-bold text-xl tracking-tight'>Doctor<span className='text-primary'>Care</span></span>
     </div>
      
      {/* Center Menu - Pill Design */}
      <ul className='hidden md:flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-100'>
        <NavLink to={'/'} className={({isActive}) => `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-white shadow-md text-primary' : 'text-gray-600 hover:text-black'}`}>
            HOME
        </NavLink>
        <NavLink to={'/doctors'} className={({isActive}) => `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-white shadow-md text-primary' : 'text-gray-600 hover:text-black'}`}>
            DOCTORS
        </NavLink>
        <NavLink to={'/about'} className={({isActive}) => `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-white shadow-md text-primary' : 'text-gray-600 hover:text-black'}`}>
            ABOUT
        </NavLink>
        <NavLink to={'/contact'} className={({isActive}) => `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-white shadow-md text-primary' : 'text-gray-600 hover:text-black'}`}>
            CONTACT
        </NavLink>
      </ul>

      {/* Right Side - Attractive */}
      <div className='flex items-center gap-3'>
        {
            token
            ? <div className='flex items-center gap-3 cursor-pointer group relative bg-gray-50 pl-1 pr-3 py-1 rounded-full border border-gray-100 hover:bg-white hover:shadow-md transition-all'>
                <img src={assets.profile_pic} alt="" className='w-8 h-8 rounded-full ring-2 ring-white shadow-sm' />
                <span className='hidden md:block text-sm font-medium text-gray-700'>Hi, User</span>
                <img className='w-2.5 transition-transform group-hover:rotate-180' src={assets.dropdown_icon} alt="" />
                
                {/* Attractive Dropdown */}
                <div className='absolute top-full right-0 pt-3 text-sm font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden'>
                        <div className='p-4 bg-gradient-to-br from-primary/10 to-indigo-50 border-b border-gray-50'>
                            <p className='font-semibold text-gray-900'>John Doe</p>
                            <p className='text-xs text-gray-500'>john@doctorcare.com</p>
                        </div>
                        <div className='p-2 flex flex-col gap-1'>
                            <p onClick={()=>navigate('/my-profile')} className='hover:bg-gray-50 hover:text-primary cursor-pointer px-3 py-2.5 rounded-xl transition-all flex items-center gap-2'>👤 My Profile</p>
                            <p onClick={()=>navigate('/my-appointments')} className='hover:bg-gray-50 hover:text-primary cursor-pointer px-3 py-2.5 rounded-xl transition-all flex items-center gap-2'>📅 My Appointments</p>
                            <hr className='border-gray-100 my-1'/>
                            <p onClick={()=>setToken(false)} className='hover:bg-red-50 hover:text-red-600 cursor-pointer px-3 py-2.5 rounded-xl transition-all flex items-center gap-2'>🚪 Logout</p>
                        </div>
                    </div>
                </div>
            </div>
            : <div className='flex items-center gap-2'>
                <button className='hidden md:block text-sm font-medium text-gray-600 hover:text-black px-5 py-2.5 transition-colors' onClick={()=>navigate('/login')}>
                    Log in
                </button>
                <button className='bg-gradient-to-r from-primary to-indigo-600 text-white px-7 py-3 rounded-full font-medium shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:scale-105 active:scale-95 transition-all duration-300 text-sm'
                    onClick={()=>navigate('/login')}>
                    Create Account →
                </button>
            </div>
        }
      </div>
    </div>
  )
}
export default Navbar