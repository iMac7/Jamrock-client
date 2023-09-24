import { motion } from "framer-motion"
import Link from "next/link"

function DesktopNav() {
  return (
    <nav className='bg-gray-100 px-20 py-2 flex justify-between items-center'>
      <Link href='/'>
        <motion.button
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{
            scale: 0.5,
            rotate: -5,
            borderRadius: "100%"
          }}
        className='border-2 border-gray-500 rounded shadow-md shadow-black'>
          <svg className='w-10 h-10' viewBox='0 0 24 24'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.28869 2.76279C1.41968 2.36983 1.84442 2.15746 2.23737 2.28845L2.54176 2.38991C3.16813 2.59868 3.69746 2.7751 4.1137 2.96873C4.55613 3.17456 4.94002 3.42965 5.23112 3.83352C5.52222 4.2374 5.64282 4.68226 5.69817 5.16708C5.72644 5.41467 5.73936 5.69227 5.74526 5.99996H16.4508C18.5058 5.99996 19.5333 5.99996 19.9779 6.67422C20.4225 7.34849 20.0177 8.2929 19.2082 10.1817L18.7797 11.1817C18.4017 12.0636 18.2128 12.5045 17.8371 12.7522C17.4614 13 16.9817 13 16.0222 13H5.9034C6.00839 13.5398 6.17403 13.8558 6.40921 14.091C6.68598 14.3677 7.07455 14.5482 7.80832 14.6468C8.56367 14.7484 9.56479 14.75 11.0002 14.75H18.0002C18.4144 14.75 18.7502 15.0857 18.7502 15.5C18.7502 15.9142 18.4144 16.25 18.0002 16.25H10.9453C9.57774 16.25 8.47542 16.25 7.60845 16.1334C6.70834 16.0124 5.95047 15.7535 5.34855 15.1516C4.74664 14.5497 4.48774 13.7918 4.36673 12.8917C4.25017 12.0247 4.25018 10.9224 4.2502 9.55484L4.2502 6.883C4.2502 6.17 4.24907 5.69823 4.20785 5.33722C4.16883 4.99538 4.10068 4.83049 4.01426 4.71059C3.92784 4.59069 3.79296 4.47389 3.481 4.32877C3.15155 4.17551 2.70435 4.02524 2.02794 3.79978L1.76303 3.71147C1.37008 3.58049 1.15771 3.15575 1.28869 2.76279ZM8.0002 8.24996C7.58599 8.24996 7.2502 8.58575 7.2502 8.99996C7.2502 9.41417 7.58599 9.74996 8.0002 9.74996H11.0002C11.4144 9.74996 11.7502 9.41417 11.7502 8.99996C11.7502 8.58575 11.4144 8.24996 11.0002 8.24996H8.0002Z'
              fill='#1C274C'
            />
            <path
              d='M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z'
              fill='#1C274C'
            />
            <path
              d='M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z'
              fill='#1C274C'
            />
          </svg>
        </motion.button>
      </Link>

      <ul className='flex gap-10 justify-around items-center'>
        <li className='flex gap-2'>
          <input
            type='search'
            name=''
            id=''
            placeholder='Search items'
            className='border-2 border-gray-500 p-1'
          />
          <button className='bg-gray-500 text-white px-2 rounded'>
            SEARCH
          </button>
        </li>
        <li>
          <Link href='/account'>Account</Link>
        </li>
        {/* <li>Help</li> */}
        <li>
          <Link href='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  )
}
export default DesktopNav