import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../css/blog.module.css'

const SingleBlog = async ({ params }) => {
  // const { posts } = props
  const { slug } = params

  // const id = pathName.split('/')[2]

  const getData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
      next: { revalidate: 3600 }
    })

    if (!res?.ok) {
      throw new Error('Something went wrong')
    }

    return res.json()
  }

  const post = await getData()

  return (
    <div className={styles?.container}>
      <div className={styles?.top}>
        {/* {post?.img && ( */}
        <div className={styles?.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1'
            alt='blog'
            fill
            className={styles?.img}
          />
        </div>
        {/* )} */}
        <span className={styles.date}>
          {post?.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles?.bottom}>
        <h1 className={styles?.title}>{post?.title}</h1>
        <p className={styles?.desc}>{post?.body}</p>
        <Link className={styles.link} href={`/blog/${post?.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default SingleBlog
