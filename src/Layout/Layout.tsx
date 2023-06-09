import React from 'react'
import { LayoutProps } from '../../Types'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
