import { ReactElement } from 'react'

const Footer = (): ReactElement => {
  const year = new Date().getFullYear()
  return (
    <div className='mt-10 p-4 bg-gray-800'>
      <p className='text-center text-white font-medium'>&#169; Bamba Fall, {year}</p>
    </div>
  )
}

export default Footer
