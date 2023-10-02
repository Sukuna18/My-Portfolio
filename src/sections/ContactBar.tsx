import { ReactElement } from 'react'
import ConnectButton from '../components/ConnectButton.js'

const ContactBar = (): ReactElement => {
  return (
    <div
      className={
        'bg-blue-500 text-white p-5 -mt-20 md:-mt-10 ' +
        'flex flex-wrap items-center text-center justify-center gap-5 ' +
        'md:text-left md:justify-between'
      }
    >
      <div>
        <h2 className='text-2xl font-semibold'>Hire me for your project</h2>
        <p>Want to find out how I could help you build user-friendly software products? </p>
      </div>
      <ConnectButton className='!text-black !bg-white' />
    </div>
  )
}

export default ContactBar
