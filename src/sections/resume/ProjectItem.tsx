import { ReactElement, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'


interface Props {
  projectName: string
  imageFile: string
  website: string
  category: string
  description: string
  highlights: string
}
const imageAnimation = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0 } },
}
const titleAnimation = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
}
const categoryAnimation = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
}
const descriptionAnimation = {
  hidden: { opacity: 0, transform: 'translateX(300px)' },
  visible: { opacity: 1, transform: 'translateX(0px)', transition: { delay: 0.6 } },
}
const highlightsAnimation = {
  hidden: { opacity: 0, transform: 'translateX(300px)' },
  visible: { opacity: 1, transform: 'translateX(0px)', transition: { delay: 0.8 } },
}
const ProjectItem = ({
  projectName,
  imageFile,
  category,
  highlights,
  description,
  website,
}: Props): ReactElement => {
  const image = new URL(`../../assets/projects/${imageFile}`, import.meta.url).href
  const control = useAnimation()
  const [Ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      console.log('inView')

      control.start('visible')
    }
  }, [control, inView])
  return (
    <div className='lg:w-1/2 md:px-5 py-5'>
      <div className='flex flex-col items-center gap-6 shadow-lg'>
        <motion.a
          variants={imageAnimation}
          initial='hidden'
          animate={control}
         href={website} target='_blank'>
          <img src={image} alt={projectName} className='' />
        </motion.a>

        <div ref={Ref} className='px-5 pb-5'>
          <motion.h2
            variants={titleAnimation}
            initial='hidden'
            animate={control}
           className={`dark:text-white font-semibold text-2xl`}>{projectName}</motion.h2>
          <motion.p
            variants={categoryAnimation}
            initial='hidden'
            animate={control}
           className={`  text-blue-500 font-medium`}>{category}</motion.p>
          <motion.p
            variants={descriptionAnimation}
            initial='hidden'
            animate={control}
           className='my-5 dark:text-white'>{description}</motion.p>

          <motion.p
            variants={highlightsAnimation}
            initial='hidden'
            animate={control}
           className='dark:text-white font-semibold'>{highlights}</motion.p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
