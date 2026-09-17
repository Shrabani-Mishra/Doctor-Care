import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Relateddoctor = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            
            const doctorData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorData)
        }
    }, [doctors, speciality, docId])

    return (
        <div className='my-16'>
            <h2 className='text-2xl font-semibold text-center'>Related Doctors</h2>
            <p className='text-center text-sm text-gray-500 mt-1'>Simply browse through our extensive list of trusted doctors.</p>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 px-4'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }}
                        className='border border-blue-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                    >
                        <img className='bg-blue-50 w-full' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Relateddoctor