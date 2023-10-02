import { ReactElement } from 'react'

interface Props {
  projectName: string
  imageFile: string
  website: string
  category: string
  description: string
  highlights: string
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

  return (
    <div className='lg:w-1/2 md:px-5 py-5'>
      <div className='flex flex-col items-center gap-6 shadow-lg'>
        <a href={website} target='_blank'>
          <img src={image} alt={projectName} className='' />
        </a>

        <div className='px-5 pb-5'>
          <h2 className={`dark:text-white font-semibold text-2xl`}>{projectName}</h2>
          <p className={`  text-blue-500 font-medium`}>{category}</p>
          <p className='my-5 dark:text-white'>{description}</p>

          <p className='dark:text-white font-semibold'>{highlights}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
