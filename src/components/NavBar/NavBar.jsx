import Link from 'next/link'
import Links from './Links'

const NavBar = () => {
  return (
    <div className='h-24 flex justify-between items-center'>
      <Link href='/' className='font-bold text-3xl'>
        OAS
      </Link>
      <Links />
    </div>
  )
}

export default NavBar
