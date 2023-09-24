'use client'
import {motion} from 'framer-motion'
import Cartpage from "@/components/Cart/Cartpage"

function page() {
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

    <Cartpage />
    </motion.div>
  )
}
export default page