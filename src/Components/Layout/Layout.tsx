import React from 'react'
import { LayoutProps, RegisterModalState } from '../../Types/types'
import RegisterModal from '@/Components/RegisterModal/RegisterModal'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { LayoutHandler } from './Functions'
import { Toaster } from 'react-hot-toast'
// ........................................................
function Layout({ children }: LayoutProps) {
  const isRegisterModalOpen = useSelector(
    (state: RegisterModalState) => state.registerModal.isOpen
  )
  return (
    <>
      {LayoutHandler(children)}
      <AnimatePresence>
        {isRegisterModalOpen && <RegisterModal />}
      </AnimatePresence>
      <Toaster />
    </>
  )
}

export default Layout
