import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#fafbff] min-h-screen'>
      <div className='max-w-6xl mx-auto px-6 pt-16'>
        <div className='text-center'>
          <span className='bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full'>GET IN TOUCH</span>
          <h1 className='text-4xl md:text-5xl font-bold mt-4 text-gray-900'>Contact <span className='text-indigo-600'>Us</span></h1>
          <p className='text-gray-500 mt-3 max-w-xl mx-auto'>Kolkata me ho? Office visit karo ya message bhejo - 24/7 available.</p>
        </div>

        <div className='grid md:grid-cols-2 gap-10 py-16 items-start'>
          {/* Left Info */}
          <div>
            <img className='rounded-[2rem] w-full shadow-xl' src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800" alt="contact" />

            <div className='mt-8 space-y-4'>
              <div className='bg-white p-5 rounded-2xl border flex gap-4'>
                <div className='w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center text-lg'>📍</div>
                <div>
                  <p className='text-sm font-bold text-gray-900'>Kolkata Office</p>
                  <p className='text-sm text-gray-500 mt-1 leading-relaxed'>PS Srijan Corporate Park, Sector V, Salt Lake<br/>Kolkata, West Bengal 700091</p>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white p-5 rounded-2xl border'>
                  <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3'>📞</div>
                  <p className='text-sm font-bold'>Call Us</p>
                  <p className='text-xs text-gray-500 mt-1'>+91 98765 43210<br/>Mon-Sat, 9AM-8PM</p>
                </div>
                <div className='bg-white p-5 rounded-2xl border'>
                  <div className='w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3'>✉️</div>
                  <p className='text-sm font-bold'>Email Us</p>
                  <p className='text-xs text-gray-500 mt-1'>kolkata@doctorecare.com<br/>24hr reply</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className='bg-white rounded-[2rem] p-8 shadow-sm border'>
            <h3 className='text-xl font-bold text-gray-900'>Send us a message</h3>
            <p className='text-sm text-gray-500 mt-1'>We will reply within 24 hours.</p>

            <div className='mt-6 space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-xs font-medium text-gray-700'>First Name</label>
                  <input className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600' placeholder='Om' type="text" />
                </div>
                <div>
                  <label className='text-xs font-medium text-gray-700'>Last Name</label>
                  <input className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600' placeholder='Singh' type="text" />
                </div>
              </div>
              <div>
                <label className='text-xs font-medium text-gray-700'>Email</label>
                <input className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600' placeholder='om@gmail.com' type="email" />
              </div>
              <div>
                <label className='text-xs font-medium text-gray-700'>Phone</label>
                <input className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600' placeholder='+91 98765 43210' type="tel" />
              </div>
              <div>
                <label className='text-xs font-medium text-gray-700'>Message</label>
                <textarea rows={4} className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600 resize-none' placeholder='How can we help you?'></textarea>
              </div>
              <button className='w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-all'>Send Message</button>
            </div>
          </div>
        </div>

        {/* Careers at Prescripto Banner */}
        <div className='pb-20'>
          <div className='bg-indigo-600 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl shadow-indigo-200'>
            <div>
              <h3 className='text-white text-xl font-bold'>Join Our Team - Careers at Prescripto</h3>
              <p className='text-white/80 text-sm mt-2 max-w-lg leading-relaxed'>We are hiring doctors, designers and developers in Kolkata. Be part of India's fastest growing health platform.</p>
            </div>
            <button className='bg-white text-indigo-600 px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all whitespace-nowrap'>Explore Jobs</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact