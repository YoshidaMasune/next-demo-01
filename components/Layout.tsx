import React, { ReactHTMLElement } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}: any) {
  return (
    <>
      <Navbar />
      <section id='grid-template' className='grid grid-rows-[minmax(30vh,auto)_10vh]'>
         <div id="contents">
            {children}
         </div>

         <Footer />
      </section>
    </>
  )
}

export default Layout