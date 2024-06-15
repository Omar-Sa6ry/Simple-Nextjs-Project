import Image from 'next/image'
import styles from './../css/home.module.css'
import Link from 'next/link'

export default function Home () {
  return (
    <div className='flex gap-[100px]'>
      <div className=''>
        <h1 className='font-bold flex-1 text-8xl text-white'>
          Creative Thoughts Agency.
        </h1>
        <p className='flex-1 my-10 text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className='flex flex-1 gap-4'>
          <button
            type='button'
            className='text-white bg-[var(--checkbox-color)] text-sm br-6 py-3 px-4'
          >
            Learn More
          </button>

          <Link
            className='bg-white text-[var(--checkbox-color)] text-sm br-6 py-3 px-4'
            href='/contact'
          >
            Contact
          </Link>
        </div>
        <div className='flex-1'>
          <Image
            className={styles?.imagesBrand}
            src={'/brands.png'}
            // height={100}
            // width={300}
            alt='brands'
            fill
          />
        </div>
      </div>
      <div>
        <Image
          src='/hero.gif'
          alt='hero'
          className={styles?.imageContainer}
          fill
        />
      </div>
    </div>
  )
}
