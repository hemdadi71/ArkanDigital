import { hideRegisterModal } from '@/Redux/Slices/RegisterModal'
import React from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import ModalTabs from './Tabs/Tab'
function RegisterModal() {
  const dispatch = useDispatch()
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-5 bg-white z-[60000] rounded-md">
        <ModalTabs />
      </motion.div>
      <div
        onClick={() => dispatch(hideRegisterModal())}
        className="bg-black fixed w-full h-full overflow-hidden top-0 z-50 bg-opacity-50 backdrop-blur-sm"></div>
    </>
  )
}

export default RegisterModal
