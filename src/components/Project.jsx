import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDeleteProjectMutation } from '../store/api/projectApi'

export const Project = ({ _id, title, description }) => {
  const [deleteProject, { isLoading, isSuccess }] = useDeleteProjectMutation()

  const handleDelete = () => {
    deleteProject(_id)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        <span>
          Project <b>{title}</b> deleted!
        </span>
      )
    }
  }, [isSuccess])

  return (
    <article className="bg-white rounded-md py-2 px-4 shadow-sm  animate__animated animate__fadeIn">
      <div className="mb-2">
        <Link
          className={'text-neutral-900 text-lg font-bold hover:underline'}
          to={`/project/${_id}`}
        >
          {title}
        </Link>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="flex justify-end">
        <button
          className="py-1 px-2 bg-transparent rounded-md border border-gray-300"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? (
            'Deleting'
          ) : (
            <AiFillDelete className="text-red-500 text-xl hover:text-red-400 hover:scale-105 transition-all cursor-pointer" />
          )}
        </button>
      </div>
    </article>
  )
}
