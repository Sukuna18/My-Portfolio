import { ReactElement } from 'react'
import contacts from '../data/contacts.json'
import { motion } from 'framer-motion'

interface Props {
  className?: string
}
const connectAnimation = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.8 } },
}

const ConnectButton = ({ className }: Props): ReactElement => {
  return (
    <motion.a
      animate='visible'
      initial='hidden'
      variants={connectAnimation}
      href={contacts['linkedin']}
      target='_blank'
      className={'bg-blue-500 py-3 px-8 rounded-full font-bold text-white ' + className}
    >
      Connect
    </motion.a>
  )
}

export default ConnectButton
