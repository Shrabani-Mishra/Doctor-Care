import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  // Dummy appointments - baad me backend se replace hoga
  const appointments = doctors.slice(0, 3)

  return (
    <div className='bg-[#fafbff] min-h-screen'>
      <div className='max-w-5xl mx-auto px-6 pt-12 pb-20'>
        <h1 className='text-3xl font-bold text-gray-900'>My Appointments</h1>
        <p className='text-sm text-gray-500 mt-1'>All your booked appointments in Kolkata</p>

        <div className='mt-10 space-y-4'>
          {appointments.map((item, index) => (
            <div key={index} className='bg-white border rounded-[1.5rem] p-5 flex flex-col md:flex-row gap-6 items-start'>
              <img className='w-32 h-32 rounded-2xl object-cover bg-indigo-50' src={item.image} alt="" />

              <div className='flex-1'>
                <p className='text-lg font-bold text-gray-900'>{item.name}</p>
                <p className='text-sm text-gray-500'>{item.speciality}</p>

                <div className='mt-3'>
                  <p className='text-xs font-semibold text-gray-700 uppercase tracking-wide'>Address:</p>
                  <p className='text-sm text-gray-500 mt-1'>{item.address?.line1 || 'Salt Lake, Kolkata'} <br/> {item.address?.line2 || 'Kolkata, WB'}</p>
                </div>

                <div className='mt-3 flex flex-wrap gap-2'>
                  <span className='text-xs bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full font-medium'>
                    Date: 25, July, 2026
                  </span>
                  <span className='text-xs bg-green-50 text-green-600 px-3 py-1.5 rounded-full font-medium'>
                    Time: 10:30 AM
                  </span>
                </div>
              </div>

              <div className='flex md:flex-col gap-3 w-full md:w-auto mt-4 md:mt-0'>
                <button className='flex-1 md:flex-none bg-indigo-600 text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all'>
                  Pay Online
                </button>
                <button className='flex-1 md:flex-none border border-gray-200 text-gray-600 px-8 py-2.5 rounded-full text-sm font-medium hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all'>
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>

        {appointments.length === 0 && (
          <div className='text-center py-20 bg-white rounded-[2rem] border mt-10'>
            <p className='text-5xl'>📅</p>
            <p className='mt-4 text-gray-700 font-medium'>No appointments booked yet</p>
            <p className='text-sm text-gray-500 mt-1'>Book your first doctor in Kolkata</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyAppointments