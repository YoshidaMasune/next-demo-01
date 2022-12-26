import { loadDefaultErrorComponents } from 'next/dist/server/load-components'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { HiMenu } from 'react-icons/hi'

type Props = {}

interface menuType {
   href: string
   content: string
}

const NavLink = ({href, content}: menuType) => {
   return (
      <>
         <li>
            <Link href={href}>{content}</Link>
         </li>  
      </>
   )
}

function Navbar({}: Props) {

   const [toggle, setToggle] = useState(false)
   const toggleNavRef:any = useRef()

   useLayoutEffect( () =>{
      toggle? toggleNavRef.current.classList.remove('-translate-x-full'): toggleNavRef.current.classList.add('-translate-x-full')
   } , [toggle])


  return (
    <nav className='p-2 mt-3 shadow-md'>
      <div className='container mx-auto flex flex-row justify-between items-center'>
         <section id='navigation' className='flex gap-5 items-center'>
            <div id="logo">
               <Image 
                  src='/img/logo.png'
                  alt='logo cat'
                  width={50}
                  height={100}
                  priority

                  className='h-auto w-auto'
               />
            </div>
            <ul id='nav-toggle' 
            ref={toggleNavRef}
            className='flex flex-col absolute left-0 top-0 px-4 py-10 backdrop-blur-md -translate-x-full transition-transform  ease-in md:flex-row gap-4 md:static md:translate-x-0 md:p-0 bg-[hsl(0,0,90%,)]'>
               <NavLink href='/' content='หน้าแรก' />
               <NavLink href='/cat' content='cat' />
               <NavLink href='/' content='หน้าแรก' />
            </ul>
         </section>

         {/* search bar */}
         <section className=''>
            <div id="search" className='hidden md:block bg-slate-100 p-3 overflow-hidden rounded-full shadow-md'>
               <form>
                  <input type="text" placeholder='ค้าหา' className='focus:outline-none bg-transparent' />
                  <span>
                     <button>
                        ss
                     </button>
                  </span>
               </form>
            </div>

            <div className='block md:hidden' > 
               <button id='nav-toggle-btn' onClick={e => setToggle(pre => pre? false:true)} aria-controls='nav-toggle' aria-expanded={false}>
                  <HiMenu />
               </button>
            </div>
         </section>
      </div>
    </nav>
  )
}

export default Navbar