import { hideRegisterModal } from '@/Redux/Reducers/RegisterModal'
import React from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import ModalTabs from './Tabs/Tab'
function RegisterModal() {
  const dispatch = useDispatch()
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="w-[26%] h-[50%] fixed translate-x-1/2 translate-y-1/2 top-1/4 left-[40%] p-5 bg-white z-20 rounded-md">
        <ModalTabs />
      </motion.div>
      <div
        onClick={() => dispatch(hideRegisterModal())}
        className="bg-black fixed w-full h-full overflow-hidden top-0 z-10 bg-opacity-50 backdrop-blur-sm"></div>
    </>
  )
}

export default RegisterModal
