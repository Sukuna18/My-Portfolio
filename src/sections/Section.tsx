import { ReactElement, ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  id?: string
  border?: boolean
  children: ReactNode
}

const Section = ({ title, subtitle, id, border, children }: Props): ReactElement => {
  return (
    <div id={id} className={'py-5 rounded-2xl ' + (border ? 'border' : 'md:border')}>
      <h2 className='dark:text-white text-4xl font-bold text-center'>{title}</h2>
      <p className='mb-10 mt-2 text-center text-blue-500 font-medium'>{subtitle}</p>
      {children}
    </div>
  )
}

export default Section
