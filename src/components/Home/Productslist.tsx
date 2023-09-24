"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useFetch } from "@/hooks/useFetch"
import { motion, useAnimation } from "framer-motion"
import { SERVER_URL } from "@/utils/urls"

type Product = {
  id: number
  name: string
  category: string
  price: string
}

export default function Productslist() {
  const imgs = []
  for (let i = 0; i < 10; i++) {
    imgs.push(i)
  }

  const img = (
    <motion.img
      className='w-full inline-block hover:cursor-pointer'
      // width={500}
      // height={500}
      src='/images/ball.webp'
      alt='pic'
      onClick={() => router.push(`/products/1`)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    />
  )
  // <Image
  //   className="w-full h-full hover:cursor-pointer"
  //   width={500}
  //   height={500}
  //   src='/images/ball.webp'
  //   alt="pic"
  //   onClick={()=>router.push(`/products/1`)}
  // />

  const router = useRouter()

  const { fetchData, isLoading, error, data } = useFetch({
    method: "GET",
    url: `${SERVER_URL}/products`,
  })

  useEffect(() => {
    fetchData()
  }, [])

  return isLoading ? (
    <h2>LOADING</h2>
  ) : (
    <main className='grid grid-cols-3 md:grid-cols-4 gap-4 p-4'>
      {data
        ? data.map((product: Product, i) => (
            <div className='shadow-lg shadow-gray-400 p-2 rounded' key={i}>
              <motion.img
                className='w-full inline-block hover:cursor-pointer'
                // width={500}
                // height={500}
                src='/images/ball.webp'
                alt='pic'
                onClick={() => router.push(`/products/${product.id}`)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))
        : null}
    </main>
  )
}
