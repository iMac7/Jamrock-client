'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useFetch } from '@/hooks/useFetch';
import {SERVER_URL} from '@/utils/urls'

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
}

export default function ProductDetails({params}:{params: {id:string}}) {
  console.log('url-', SERVER_URL )
  
  const {fetchData, isLoading, error, data} = useFetch({method: "GET", url: `${SERVER_URL}/products/${params.id}`})
  let product:Product | null
  if(data) product = data[0]

  useEffect(() => {
    fetchData()
  }, [])
  

  if (isLoading) {
    return <p>LOADING...</p>;
  }

  return (
    <motion.div
      key={window.location.pathname}
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      exit={{ y: -300 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}>
      <div className="flex">
        <div className="w-1/2">
          <Image
            src={'/images/ball.webp'}
            alt={'main image'}
            className="w-full h-auto grayscale"
            width={500}
            height={500}
          />
        </div>
        
        {product?
        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-lg font-semibold">${product.price}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
            onClick={() => {
              // Add to cart logic goes here
              alert('Added to cart');
            }}
          >
            Add to Cart
          </button>
        </div>
        :null}
      </div>
    </motion.div>
  );
};

