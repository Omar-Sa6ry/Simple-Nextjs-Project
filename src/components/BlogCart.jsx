import Image from 'next/image'
import Link from 'next/link'
import styles from '../css/blog.module.css'

const BlogCart = props => {
  const { img, title, desc, date, key, id } = props

  return (
    <div className='gap-5 w-[32%] flex flex-col mx-1 my-5' key={key}>
      <div className='h-[100px] relative w-[90%]'>
        <Image
          src={img}
          className=' object-cover'
          width={300}
          height={100}
          alt='blog'
        />
      </div>
      <span className={styles?.date}>{date}</span>
      <div className='flex flex-col flex-wrap'>
        <h1 className='text-xl mt-2 w-[90%]'>{title}</h1>
        <p className='text-gray-700 text-sm font-semibold w-[90%] my-5'>
          {desc}
        </p>
        <Link className='underline text-xs' href={`blog/${id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default BlogCart
