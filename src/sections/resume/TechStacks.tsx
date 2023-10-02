import { ReactElement, useEffect } from 'react'
import Section from '../Section.js'
import techStacks from '../../data/tech-stacks.json'
import { motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TechStacks = (): ReactElement => {
  const control = useAnimation()
const [ref, inView] = useInView()
useEffect(() => {
  if (inView) {
    control.start('visible')
  }
}
, [control, inView])
  return (
    <Section title='Tech Stacks' subtitle="I've mostly worked with" border>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1}}
        className='flex flex-wrap items-center justify-center gap-10'
      >
        {techStacks.map((item, i) => {
          const image = new URL(`../../assets/tech-stacks/${item.imageFile}`, import.meta.url).href

          return (
            <motion.div
            ref={ref}
            transition={{delay: i * 0.1  }}
            initial='hidden'
            animate={control}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -80 }
            }}
              key={item.name}
              className='flex flex-col gap-2 items-center justify-center'
            >
              <img src={image} className='w-20 h-20' alt={item.name} />
              <p className='dark:text-white font-semibold text-lg'>{item.name}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}

export default TechStacks
