"use client"
import Featured from "@/components/Home/Featured"
import Productslist from "@/components/Home/Productslist"
import DesktopNav from "@/components/Nav/DesktopNav"
import { motion } from "framer-motion"


export default function Home() {
  
  return (
    <>
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
      <Productslist />

    </motion.div>
    </>


  )
  
}
