import Image from 'next/image'

const contactPage = () => {
  return (
    <div className='flex flex-col gap-[100px] xl:flex-row'>
      <Image
        src='/contact.png'
        className='flex-1 flex-center mx-auto'
        width={400}
        height={400}
        alt='About Image'
      />

      <form className='flex-col flex gap-4 w-100'>
        <input
          type='text'
          placeholder='Name and Subname'
          className='w-100 py-3 flex-2 px-5 color-white bg-[var(--gray-color)] outline-none br-6 border-none'
        />

        <input
          type='email'
          placeholder='Email'
          className='w-100 py-3 px-5 flex-2 color-white bg-[var(--gray-color)] outline-none br-6 border-none'
        />

        <input
          type='number'
          placeholder='Phone Number'
          className='w-100 py-3 flex-2 px-5 color-white bg-[var(--gray-color)] outline-none br-6 border-none'
        />

        <textarea
          type='text'
          placeholder='Message'
          className='w-100 flex-1 py-3 px-5 color-white bg-[var(--gray-color)] outline-none br-6 border-none'
        />

        <button
          type='submit'
          className='w-100 py-3 flex-2 px-5 bg-[var(--active-color)] text-[var(--color-white)] outline-none br-6 border-none'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default contactPage
