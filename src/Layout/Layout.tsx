import React from 'react'
import { LayoutProps } from '../Types/types'
import RegisterModal from '@/Components/RegisterModal/RegisterModal'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { LayoutHandler } from './Functions'
function Layout({ children }: LayoutProps) {
  const isRegisterModalOpen = useSelector(
    (state: any) => state.registerModal.isOpen
  )
  return (
    <>
      {LayoutHandler(children)}
      <AnimatePresence>
        {isRegisterModalOpen && <RegisterModal />}
      </AnimatePresence>
    </>
  )
}

export default Layout
