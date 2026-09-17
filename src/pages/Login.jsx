import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    // yaha backend api call karna
    console.log({ name, email, password, state })
  }

  return (
    <div className='bg-[#fafbff] min-h-[80vh] flex items-center justify-center px-6 py-16'>
      <div className='w-full max-w-5xl bg-white border rounded-[2rem] shadow-sm grid md:grid-cols-2 overflow-hidden'>

        {/* Left Image */}
        <div className='hidden md:block bg-indigo-600 p-10 relative'>
          <div className='relative z-10'>
            <h2 className='text-3xl font-bold text-white leading-tight'>Welcome to<br/>DoctorECare</h2>
            <p className='text-white/80 text-sm mt-3'>Book appointments with trusted doctors in Kolkata in under 60 seconds.</p>
          </div>
          <img className='absolute bottom-0 left-0 w-full h-[70%] object-cover opacity-90' src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600" alt="" />
          <div className='absolute bottom-6 left-6 right-6 bg-white/15 backdrop-blur-md p-4 rounded-2xl'>
            <p className='text-white text-sm'>"Best platform for booking doctors in Salt Lake. Super fast!"</p>
            <p className='text-white/60 text-xs mt-2'>— Shrabani, Kolkata</p>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={onSubmitHandler} className='p-8 md:p-10'>
          <div className='text-center md:text-left'>
            <h1 className='text-2xl font-bold text-gray-900'>{state === 'Sign Up'? 'Create Account' : 'Welcome Back'}</h1>
            <p className='text-sm text-gray-500 mt-1'>
              {state === 'Sign Up'? 'Please sign up to book appointment' : 'Please login to book appointment'}
            </p>
          </div>

          <div className='mt-8 space-y-4'>
            {state === 'Sign Up' && (
              <div>
                <label className='text-xs font-medium text-gray-700'>Full Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600' placeholder='Shrabani Mishra' type="text" required />
              </div>
            )}
            <div>
              <label className='text-xs font-medium text-gray-700'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600' placeholder='ssm@gmail.com' type="email" required />
            </div>
            <div>
              <label className='text-xs font-medium text-gray-700'>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-600' placeholder='••••••••' type="password" required />
            </div>

            <button type='submit' className='w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-all mt-2'>
              {state === 'Sign Up'? 'Create account' : 'Login'}
            </button>

            <div className='relative my-6'>
              <div className='absolute inset-0 flex items-center'><div className='w-full border-t border-gray-200'></div></div>
              <div className='relative flex justify-center'><span className='bg-white px-3 text-xs text-gray-400'>OR</span></div>
            </div>

            <p className='text-center text-sm text-gray-500'>
              {state === 'Sign Up'? 'Already have an account?' : "Don't have an account?"}
              <span onClick={() => setState(state === 'Sign Up'? 'Login' : 'Sign Up')} className='text-indigo-600 font-medium ml-1 cursor-pointer hover:underline'>
                {state === 'Sign Up'? 'Login here' : 'Sign up'}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login