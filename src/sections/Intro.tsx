import { ReactElement } from 'react'
import flag from '../assets/flag-senegal.png'
import Contacts from '../components/Contacts.js'
import ConnectButton from '../components/ConnectButton.js'
import profile from '../data/profile.json'
import { Variants, motion } from 'framer-motion'
const helloAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0 } },
}
const titleAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
}
const profilAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
}
const flagAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
}
const imageAnimation: Variants = {
  hidden: { opacity: 0, transform: 'translateX(600px)'},
  visible: { opacity: 1, transform: 'translateX(0px)', transition: { duration: 2 }}
}

const Intro = (): ReactElement => {
  const image = new URL('../assets/hero.png', import.meta.url).href
  return (
    <div
      id='home'
      className='flex justify-between  mt-[10%]'
      style={{ height: '92vh' }}
    >
      <div className={
        ' flex flex-col justify-between items-start ' +
        'md:items-start sm:text-sm  gap-7 text-gray-500 text-center md:text-left h-[50%]'
      }>
      <motion.p animate='visible' initial='hidden' variants={helloAnimation} className='dark:text-white text-4xl font-semibold'>
        Hello<span>👋</span>, I'm
      </motion.p>
      <motion.p
        initial='hidden'
        animate='visible'
        variants={titleAnimation}
        className='dark:text-white text-6xl font-extrabold text-gray-600'
      >
        {profile.name}
      </motion.p>
      <motion.p
        initial='hidden'
        animate='visible'
        variants={profilAnimation}
        className='dark:text-white text-4xl font-semibold'
      >
        {profile.title}
      </motion.p>
      <motion.p
        initial='hidden'
        animate='visible'
        variants={flagAnimation}
        className='dark:text-white text-2xl flex gap-2 items-center'
      >
        <span>{profile.country}</span> <img src={flag} alt='Flag' className='h-5' />
      </motion.p>

      <ConnectButton className='my-5' />

      <Contacts />
      </div>
      <motion.div className=''
        initial='hidden'
        animate='visible' 
      variants={imageAnimation}
      >
        <img src={image} alt='Hero' className='w-100 h-100 mb:hidden' />
      </motion.div>
    </div>
  )
}

export default Intro
