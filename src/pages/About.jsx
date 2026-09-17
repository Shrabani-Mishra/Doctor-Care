import React from 'react'

const About = () => {
  return (
    <div className='bg-[#fafbff] min-h-screen'>
      {/* Hero */}
      <div className='max-w-6xl mx-auto px-6 pt-16 pb-10 text-center'>
        <span className='bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full'>ABOUT DOCTOR-CARE</span>
        <h1 className='text-4xl md:text-5xl font-bold mt-4 text-gray-900 leading-tight'>
          Your Health, <br /> <span className='text-primary'>Our Priority</span>
        </h1>
        <p className='text-gray-500 mt-4 max-w-2xl mx-auto'>We are on a mission to make healthcare accessible, transparent and hassle-free for everyone in India.</p>
      </div>


      <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-10'>
        <div className='relative'>
          <div className='absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-[2rem] -z-10'></div>
          <img className='rounded-[2rem] w-full object-cover shadow-xl' src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800" alt="doctors" />
          <div className='absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4'>
            <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl'>✓</div>
            <div>
              <p className='font-bold text-gray-900'>1000+ Trusted</p>
              <p className='text-xs text-gray-500'>Verified Doctors</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-3xl font-bold text-gray-900'>We Care About Your Health Journey</h2>
          <p className='text-gray-500 mt-4 leading-relaxed'>Welcome to Prescripto. We understand that booking a doctor shouldn't be stressful. That's why we built a simple, fast and secure platform where you can find specialist doctors near you in seconds.</p>

          <div className='mt-6 space-y-4'>
            <div className='flex gap-3'>
              <div className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm flex-shrink-0'>1</div>
              <p className='text-sm text-gray-600'><span className='font-semibold text-gray-900'>Find Your Doctor:</span> Search by speciality, location and availability.</p>
            </div>
            <div className='flex gap-3'>
              <div className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm flex-shrink-0'>2</div>
              <p className='text-sm text-gray-600'><span className='font-semibold text-gray-900'>Book Instantly:</span> Real-time slots, no waiting, no phone calls.</p>
            </div>
            <div className='flex gap-3'>
              <div className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm flex-shrink-0'>3</div>
              <p className='text-sm text-gray-600'><span className='font-semibold text-gray-900'>Track Records:</span> All appointments and prescriptions in one place.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='bg-white border rounded-[2rem] p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-sm'>
          <div><h3 className='text-3xl font-bold text-gray-900'>10k+</h3><p className='text-sm text-gray-500 mt-1'>Patients Served</p></div>
          <div><h3 className='text-3xl font-bold text-gray-900'>98%</h3><p className='text-sm text-gray-500 mt-1'>Satisfaction Rate</p></div>
          <div><h3 className='text-3xl font-bold text-gray-900'>15+</h3><p className='text-sm text-gray-500 mt-1'>Specialities</p></div>
          <div><h3 className='text-3xl font-bold text-gray-900'>24/7</h3><p className='text-sm text-gray-500 mt-1'>Support Available</p></div>
        </div>
      </div>

      {/* Why Choose Us Cards */}
      <div className='max-w-6xl mx-auto px-6 pb-20'>
        <h2 className='text-2xl font-bold text-center mb-8'>WHY <span className='text-primary'>CHOOSE US</span></h2>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='group bg-white p-8 rounded-[1.5rem] border hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
            <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl'>⚡</div>
            <h3 className='font-semibold mt-4 text-lg'>Super Fast Booking</h3>
            <p className='text-sm text-gray-500 mt-2 leading-relaxed'>Book an appointment in under 60 seconds. No paperwork, no phone queue.</p>
          </div>
          <div className='group bg-primary text-white p-8 rounded-[1.5rem] shadow-xl shadow-primary/20 hover:-translate-y-2 transition-all duration-300'>
            <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl'>🛡️</div>
            <h3 className='font-semibold mt-4 text-lg'>100% Verified Doctors</h3>
            <p className='text-sm text-white/80 mt-2 leading-relaxed'>Every doctor is verified with degree, experience and real patient reviews.</p>
          </div>
          <div className='group bg-white p-8 rounded-[1.5rem] border hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
            <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl'>💬</div>
            <h3 className='font-semibold mt-4 text-lg'>24/7 Support</h3>
            <p className='text-sm text-gray-500 mt-2 leading-relaxed'>Chat with us anytime. We will help you find the right specialist.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About