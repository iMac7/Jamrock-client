"use client"
import { useCredentials } from "@/hooks/useCredentials"
import { useFetch } from "@/hooks/useFetch"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Page() {
  const { user } = useCredentials()

  return (
    <motion.div
      key={window.location.pathname}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}>
      <div className='container mx-auto p-8'>
        <h1 className='text-3xl font-semibold mb-4'>User Profile</h1>
        <div className='mb-4'>
          <label className='block text-gray-600'>Username:</label>
          <p className='text-lg font-semibold'>{user.username}</p>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-600'>Email:</label>
          <p className='text-lg font-semibold'>{user.email}</p>
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          onClick={() => alert("Edit profile functionality goes here")}>
          Edit Profile
        </button>
      </div>
    </motion.div>
  )
}
