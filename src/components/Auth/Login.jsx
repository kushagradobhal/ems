import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="border border-gray-700 p-8 rounded-lg shadow-xl bg-gray-900 w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} 
        className="flex flex-col gap-4 items-center justify-center w-full">
          <input 
            value = {email}
            onChange = {(e)=>{
                setEmail(e.target.value)
            }}
            type="email" 
            placeholder="Enter Email" 
            className="w-full border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input 
            value = {password}
            onChange = {(e)=>{
                setPassword(e.target.value)
            }}
            type="password" 
            placeholder="Enter Password" 
            className="w-full border border-gray-700 bg-gray-800 text-white placeholder-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button 
            className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
