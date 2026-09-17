import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  
  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (!doctors) return;

    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors);
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className='p-4'>
      <p className='text-gray-600 mb-4'>Browse through the doctors specialist.</p>

      {/* Speciality Filter Buttons */}
      <div className='flex flex-wrap gap-2 mb-6'>
        <p onClick={() => navigate('/doctors')} className={`px-3 py-1 rounded-full cursor-pointer border ${!speciality? 'bg-indigo-600 text-white' : ''}`}>All</p>
        <p onClick={() => navigate('/doctors/General physician')} className={`px-3 py-1 rounded-full cursor-pointer border ${speciality === 'General physician'? 'bg-indigo-600 text-white' : ''}`}>General physician</p>
        <p onClick={() => navigate('/doctors/Gynecologist')} className={`px-3 py-1 rounded-full cursor-pointer border ${speciality === 'Gynecologist'? 'bg-indigo-600 text-white' : ''}`}>Gynecologist</p>
        <p onClick={() => navigate('/doctors/Dermatologist')} className={`px-3 py-1 rounded-full cursor-pointer border ${speciality === 'Dermatologist'? 'bg-indigo-600 text-white' : ''}`}>Dermatologist</p>
        <p onClick={() => navigate('/doctors/Pediatricians')} className={`px-3 py-1 rounded-full cursor-pointer border ${speciality === 'Pediatricians'? 'bg-indigo-600 text-white' : ''}`}>Pediatricians</p>
        <p onClick={() => navigate('/doctors/Neurologist')} className={`px-3 py-1 rounded-full cursor-pointer border ${speciality === 'Neurologist'? 'bg-indigo-600 text-white' : ''}`}>Neurologist</p>
        <p onClick={() => navigate('/doctors/Gastroenterologist')} className={`px-3 py-1 rounded-full cursor-pointer border ${speciality === 'Gastroenterologist'? 'bg-indigo-600 text-white' : ''}`}>Gastroenterologist</p>
      </div>

      {/* Doctors Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filterDoc.map((item, index) => (
          <div
            key={index}
            onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }}
            className='group bg-[#f8f9ff] border border-indigo-50 rounded-[24px] overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 hover:bg-white transition-all duration-500'
          >
            <div className='relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50'>
              <img className='w-full h-[200px] object-cover object-top group-hover:scale-110 transition-transform duration-700' src={item.image} alt={item.name} />
              <div className='absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-white'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                <p className='text-[11px] font-semibold text-green-600'>Available</p>
              </div>
            </div>

            <div className='p-4'>
              <div className='flex items-center justify-between'>
                <p className='text-gray-900 font-bold text-[15px] truncate'>{item.name}</p>
                <span className='text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium'>{item.speciality?.slice(0, 3)}</span>
              </div>
              <p className='text-gray-500 text-[13px] mt-1 truncate'>{item.speciality}</p>
              <div className='flex items-center gap-1 mt-2.5'>
                <span className='text-amber-400 text-xs'>★★★★★</span>
                <span className='text-[11px] text-gray-400'>4.9 (120)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors