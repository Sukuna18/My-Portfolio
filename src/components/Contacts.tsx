import { useMemo } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import contacts from '../data/contacts.json'
import { motion } from 'framer-motion'

const Contacts = () => {
  const contactItems = useMemo(
    () => [
      {
        icon: FaGithub,
        link: contacts['github'],
      },
      {
        icon: FaInstagram,
        link: contacts['instagram'],
      },
      {
        icon: FaLinkedinIn,
        link: contacts['linkedin'],
      },
      {
        icon: FaWhatsapp,
        link: contacts['whatsapp'],
      },
    ],
    [],
  )

  return (
    <div className='flex gap-5 text-blue-500 text-3xl'>
      {contactItems.map((item,i) => (
        <motion.a
        transition={{delay: (i * 0.2) + 1 }}
        initial='hidden'
        animate='visible'
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 60 }
        }}
          key={item.link}
          href={item.link}
          target='_blank'
          className='p-2 rounded-full border-2 border-blue-500'
        >
          {item.icon()}
        </motion.a>
      ))}
    </div>
  )
}

export default Contacts
