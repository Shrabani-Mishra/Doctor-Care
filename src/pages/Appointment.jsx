import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Relateddoctor from '../components/Relateddoctor'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchDocInfo = () => {
    const doctor = doctors?.find(doc => doc._id === docId)
    setDocInfo(doctor)
    setLoading(false)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    let today = new Date()
    let allSlots = []

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date(today)
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0) // 9 PM closing

      // Start time
      if (today.getDate() === currentDate.getDate()) {
        // Today - start from next hour if after 10am
        currentDate.setHours(currentDate.getHours() > 10? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while (currentDate < endTime) {
       let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // 30 min interval
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      allSlots.push(timeSlots)
    }

    setDocSlots(allSlots)
  }

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      fetchDocInfo()
    }
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots()
    }
  }, [docInfo])

  if (loading) {
    return <div className='p-10 text-center'>Loading doctor info...</div>
  }

  if (!docInfo) {
    return <div className='p-10 text-center'>Doctor not found!</div>
  }

  return (
    <div className='p-6 max-w-5xl mx-auto'>
      {/* Doctor Info Card */}
      <div className='flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border'>
        <img src={docInfo.image} alt={docInfo.name} className='w-48 h-48 object-cover rounded-xl' />
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>{docInfo.name}</h2>
          <p className='text-gray-500 mt-1'>{docInfo.speciality} - {docInfo.degree}</p>
          <p className='text-sm text-gray-400 mt-1'>{docInfo.experience} Experience</p>
          <div className='mt-4'>
            <p className='font-semibold'>About:</p>
            <p className='text-sm text-gray-600 mt-1'>{docInfo.about}</p>
          </div>
          <p className='mt-4 text-gray-700'>
            Appointment Fee: <span className='font-bold'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='mt-8'>
        <h3 className='font-semibold text-lg'>Booking Slots</h3>

        {/* Date Slots */}
        <div className='flex gap-3 overflow-x-auto mt-4 pb-2'>
          {docSlots.length > 0 && docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`text-center py-4 min-w-16 rounded-full cursor-pointer flex-shrink-0
              ${slotIndex === index? 'bg-primary text-white' : 'border border-gray-200'}`}
            >
              <p>{item[0] && item[0].datetime.toLocaleDateString([], { weekday: 'short' })}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Time Slots */}
        <div className='flex flex-wrap gap-2 mt-4'>
          {docSlots.length > 0 && docSlots[slotIndex]?.map((item, index) => (
            <p
              key={index}
              onClick={() => setSlotTime(item.time)}
              className={`text-sm px-4 py-2 rounded-full cursor-pointer border flex-shrink-0
              ${item.time === slotTime? 'bg-primary text-white' : 'border-gray-300 text-gray-600'}`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        <button
          onClick={() => alert(`Appointment Booked for ${slotTime}`)}
          className='mt-6 bg-primary text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition font-medium'
        >
          Book an appointment
        </button>
      </div>
      {/* Listing related doctors */}
      <Relateddoctor docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment