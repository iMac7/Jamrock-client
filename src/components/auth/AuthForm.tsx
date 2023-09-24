'use client'
import {useFetch} from "@/hooks/useFetch"
import {MouseEvent, useEffect, useRef, useState} from "react"
import {SERVER_URL} from '@/utils/urls'
import { useRouter } from "next/navigation"

type Props = {
    name: string
}

type User = {
  email: string,
  username?: string,
  password: string,
}

export default function AuthForm({name}: Props) {
  const router = useRouter()
  const passwordref = useRef<HTMLInputElement | null>(null)
  const [shouldFetch, setShouldFetch] = useState(false)
  const [body, setBody] = useState(null)

  const user: User = 
  name === 'Sign Up'?
  {
    username: 'admin',
    email: 'user1@gmail.com',
    password: passwordref.current?.value || ''
  }
  : 
  {
    username: 'admin',
    email: 'user1@gmail.com',
    password: '12345'
  }


  const url = `${SERVER_URL}/auth/${name==='Sign Up'? 'signup' : 'signin'}`

  const {fetchData, isLoading, error, data} = useFetch({method: 'POST', url, body: user}) 

  useEffect(() => {
    if(data!==null) {
      const user = JSON.stringify(data)
      localStorage.setItem('user', user)
      router.push('/')
    }
  }, [data])
  

  return (
    <form className="border-2 border-gray-400 rounded-lg w-[300px] absolute top-4 left-0 translate-x-[50%] p-4 flex flex-col gap-4">
        <h1 className="font-bold text-xl">{name}</h1>

        <fieldset className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input className="border-2 border-gray-400 p-2" type="text" name="email" id="" placeholder="email" />
        </fieldset>
        
        {
        name==='Sign Up'? 
        <fieldset className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input className="border-2 border-gray-400 p-2" type="text" name="username" id="" placeholder="username" />
        </fieldset>
        :null
        }
        
        <fieldset className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input ref={passwordref} className="border-2 border-gray-400 p-2" type="text" name="password" id="" placeholder="password" />
        </fieldset>

        {
        name==='Sign Up'? 
        <fieldset className="flex flex-col">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input className="border-2 border-gray-400 p-2" type="text" name="confirm_password" id="" placeholder="confirm password" />
        </fieldset>
          :null
        }
      
        <button 
          className="bg-black text-white active:bg-gray-500 p-2"
          onClick={e=> {e.preventDefault(); fetchData()}}
        >SEND</button>

    </form>
  )
}
