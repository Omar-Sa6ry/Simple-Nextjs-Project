import Image from 'next/image'

const aboutPage = () => {
  return (
    <div className='flex flex-col gap-[100px] xl:flex-row'>
      <div className='flex justify-center flex-1 flex-wrap flex-col'>
        <h2 className='font-bold text-[var(--active-color)]'>About Agency</h2>

        <h1 className='my-5 block text-5xl font-bold'>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>

        <p className='my-5 text-sm font-semibold'>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>

        <div className='between-center flex-wrap'>
          <div className=''>
            <h1 className='font-extrabold text-4xl text-[var(--active-color)]'>
              10 K+
            </h1>
            <p className='font-semibold text-xs mt-1'>Year of experience</p>
          </div>
          <div className=''>
            <h1 className='font-extrabold text-4xl text-[var(--active-color)]'>
              240 K+
            </h1>
            <p className='font-semibold text-xs mt-1'>Peopule Reatched</p>
          </div>
          <div className=''>
            <h1 className='font-extrabold text-4xl text-[var(--active-color)]'>
              30 K+
            </h1>
            <p className='font-semibold text-xs mt-1'>Service and Plugins</p>
          </div>
        </div>
      </div>

        <Image src='/about.png' className='flex-1 flex-center mx-auto' width={400} height={400} alt='About Image' />
    </div>
  )
}

export default aboutPage
