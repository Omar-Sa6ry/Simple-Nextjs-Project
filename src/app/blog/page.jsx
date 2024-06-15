import BlogCart from '@/components/BlogCart'

export const metadata = {
  title: 'Blog',
  description: 'next app description'
}

const blogPage = async () => {
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: { revalidate: 3600 }
    })

    if (!res.ok) {
      throw new Error('Something went wrong')
    }

    return res.json()
  }

  const posts = await getData()

  return (
    <div className='flex  items-center justify-between flex-wrap'>
      {posts?.map(post => {
        return (
          <BlogCart
            title={post.title}
            key={post?.id}
            id={post?.id}
            img={
              'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1'
            }
            desc={post?.body}
            date='12-2-2024'
          />
        )
      })}
    </div>
  )
}

export default blogPage
