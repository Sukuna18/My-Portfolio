import { ReactElement } from 'react'
import TechStacks from './TechStacks.js'
import Experience from './Experience.js'

const Resume = (): ReactElement => {
  return (
    <div id='resume' className='flex flex-col gap-20'>
      <TechStacks />
      <Experience />
    </div>
  )
}

export default Resume
