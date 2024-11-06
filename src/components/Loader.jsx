import React from 'react'
import { motion } from 'framer-motion'

const Loader = ({ count }) => {
  
  return (
    <div className="w-screen loader-animation h-screen flex justify-center items-center bg-gray-200 dark:bg-gray-900">
      <motion.h1
        className="text-4xl fixed top-4 left-4 font-bold loader-font"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {count}
      </motion.h1>
    </div>
  )
}

export default Loader;
