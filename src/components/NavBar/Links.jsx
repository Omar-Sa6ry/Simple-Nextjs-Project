'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import Link from 'next/link'
import styles from '../../css/navBar.module.css'

const link = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'admin', path: '/admin' },
  { title: 'Login', path: '/login' }
]

const Links = () => {
  const pathName = usePathname()

  const [open, setOpen] = useState(false)

  console.log(open)
  // return (
  //   <div className='gap-3 items-center flex'>
  //     <div className={styles?.navBar}>
  //       {link?.map(item => (
  //         <Link
  //           key={item?.path}
  //           href={item?.path}
  //           className={`cursor-pointer  min-w-24 rounded-full p-1 text-center ${
  //             pathName === item?.path
  //               ? 'text-[var(--color-black)] bg-[var(--color-white)]'
  //               : ''
  //           }`}
  //         >
  //           {item?.title}
  //         </Link>
  //       ))}
  //     </div>
  //     {/* // ) : (
  //       // mobile */}
  //     <div className='flex flex-col '>
  //       <button onClick={() => setOpen(e => !e)} className={styles?.buttonNav}>
  //         <LuMenu className='text-5xl' />
  //       </button>

  //       <div className={styles?.navbarMobile}>
  //         {link?.map(item => (
  //           <Link
  //             key={item?.path}
  //             href={item?.path}
  //             className={`cursor-pointer  min-w-24 rounded-full p-1 text-center ${
  //               pathName === item?.path
  //                 ? 'text-[var(--color-black)] bg-[var(--color-white)]'
  //                 : ''
  //             }`}
  //           >
  //             {item?.title}
  //           </Link>
  //         ))}
  //       </div>
  //     </div>
  //     {/* )} */}
  //   </div>
  // )
}

export default Links
