import { ReactElement, useEffect } from 'react'
import photo from '../assets/sukuna.jpg'
import profile from '../data/profile.json'
import { Variants, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const imageAnimation: Variants = {
  hidden: { opacity: 0, transform: 'translateX(-240px)' },
  visible: { transform: 'translateX(0px)' , opacity: 1, transition: { duration: 1 } },
}
const nameAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
}
const AboutAnimation: Variants = {
  hidden: { opacity: 0, transform: 'translateX(300px)' },
  visible: { transform: 'translateX(0px)', opacity: 1, transition: { duration: 1 } },
}
const About = (): ReactElement => {
  const control = useAnimation()
  const [Ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])
  return (
    <div
      ref={Ref}
      id='about'
      className='flex flex-col md:flex-row items-center gap-10 text-center md:text-left'
    >
      <motion.img
        animate={control}
        initial='hidden'
        variants={imageAnimation}
        src={photo}
        alt='Photo'
        className='w-60 h-60 rounded-full'
      />
      <div className='flex flex-col items-center md:items-start'>
        <motion.div animate={control} initial='hidden' variants={nameAnimation}>
          <p className='text-4xl font-bold dark:text-white'>{profile.name}</p>
          <p className='font-medium text-blue-500 dark:text-white'>{profile.title}</p>
        </motion.div>
        <motion.p 
        animate={control}
        initial='hidden'
        variants={AboutAnimation}
        className='py-5 mb-2 text-left dark:text-white'>{profile.about}</motion.p>

        <motion.a
          animate={control}
          initial='hidden'
          variants={nameAnimation}
          href={profile.resumeUrl}
          target='_blank'
          className={'bg-blue-500 py-3 px-8 rounded-full font-bold text-white'}
        >
          Download CV
        </motion.a>
      </div>
    </div>
  )
}

export default About
