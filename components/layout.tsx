import { Body, Head, Html, Tailwind, TailwindConfig } from '@react-email/components'
import React from 'react'
import Header from './header'
import Footer from './footer'

import tailwindConfig from '../tailwind.config'

const Layout = ({ children }) => {
  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig as TailwindConfig}>
        <Header />
        <Body className="bg-white mx-auto my-0 font-sans max-w-[600px]">
          {children}
        </Body>
        <Footer />
      </Tailwind>
    </Html>
  )
}

export default Layout