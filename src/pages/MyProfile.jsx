import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [userData, setUserData] = useState({
    name: "Om Singh",
    image: assets.profile_pic,
    email: "john@doctorcare.com",
    phone: "+91 98765 43210",
    address: { line1: "PS Srijan Corporate Park, Sector V", line2: "Kolkata, West Bengal 700091" },
    gender: "Male",
    dob: "2000-01-20"
  })

  return (
    <div className='bg-[#fafbff] min-h-screen'>
      <div className='max-w-5xl mx-auto px-6 pt-16 pb-20'>
        <div className='bg-white border rounded-[2rem] p-8 md:p-10'>
          <div className='flex flex-col md:flex-row gap-8 items-start'>
            <div className='relative'>
              <img className='w-32 h-32 rounded-[1.5rem] object-cover shadow-lg' src={userData.image} alt="" />
            </div>
            <div className='flex-1 w-full'>
              {isEdit? (
                <input value={userData.name} onChange={e => setUserData(prev => ({...prev, name: e.target.value }))} className='text-2xl font-bold bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 w-full max-w-sm outline-none' type="text" />
              ) : (
                <h1 className='text-3xl font-bold text-gray-900'>{userData.name}</h1>
              )}
              <div className='w-full h-[1px] bg-gray-100 my-6'></div>
              <div className='grid md:grid-cols-2 gap-6 text-sm'>
                <div className='space-y-6'>
                  <div>
                    <p className='text-gray-400 text-xs font-medium uppercase'>Contact Information</p>
                    <div className='mt-3 space-y-3'>
                      <div className='flex justify-between'><span className='text-gray-500'>Email:</span><span className='font-medium text-indigo-600'>{userData.email}</span></div>
                      <div className='flex justify-between'><span className='text-gray-500'>Phone:</span><span className='font-medium'>{userData.phone}</span></div>
                      <div className='flex justify-between gap-4'><span className='text-gray-500'>Address:</span><span className='font-medium text-right'>{userData.address.line1}<br/>{userData.address.line2}</span></div>
                    </div>
                  </div>
                </div>
                <div className='space-y-6'>
                  <div>
                    <p className='text-gray-400 text-xs font-medium uppercase'>Basic Information</p>
                    <div className='mt-3 space-y-3'>
                      <div className='flex justify-between'><span className='text-gray-500'>Gender:</span><span className='font-medium'>{userData.gender}</span></div>
                      <div className='flex justify-between'><span className='text-gray-500'>Birthday:</span><span className='font-medium'>{userData.dob}</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-8 flex gap-3'>
                {isEdit? (
                  <>
                    <button onClick={()=>setIsEdit(false)} className='bg-indigo-600 text-white px-8 py-2.5 rounded-full text-sm font-medium'>Save</button>
                    <button onClick={()=>setIsEdit(false)} className='border border-gray-200 px-8 py-2.5 rounded-full text-sm font-medium'>Cancel</button>
                  </>
                ) : (
                  <button onClick={()=>setIsEdit(true)} className='border border-indigo-600 text-indigo-600 px-8 py-2.5 rounded-full text-sm font-medium'>Edit</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile