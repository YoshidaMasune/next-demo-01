import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
            <ul className='flex gap-4'>
               <NavLink href='/' content='หน้าแรก' />
               <NavLink href='/cat' content='cat' />
               <NavLink href='/' content='หน้าแรก' />
            </ul>
         </section>

         {/* search bar */}
         <section className=''>
            <div id="search" className='bg-slate-100 p-3 overflow-hidden rounded-full shadow-md'>
               <form>
                  <input type="text" placeholder='ค้าหา' className='focus:outline-none bg-transparent' />
                  <span>
                     <button>
                        ss
                     </button>
                  </span>
               </form>
            </div>
         </section>
      </div>
    </nav>
  )
}

export default Navbar