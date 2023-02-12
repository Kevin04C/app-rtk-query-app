import { MdError } from 'react-icons/md'
import { useProject } from '../hooks/useProject'
import { Project } from './Project'

export const ProjectList = () => {
  const { isLoading, isError, projects } = useProject()

  if (isError) {
    return (
      <div className="flex gap-2 items-center text-red-500 w-full justify-center mt-2">
        <MdError />
        <span>Error fetching data</span>
      </div>
    )
  }
  return (
    <section className="mt-10 grid md:grid-cols-3 lg:md:grid-cols-4 md:grid-flow-row gap-4">
      {isLoading && <p>Cargando...</p>}
      {!isLoading &&
        projects?.map((project) => <Project key={project._id} {...project} />)}
    </section>
  )
}
