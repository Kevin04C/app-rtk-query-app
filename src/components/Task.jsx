import { FaRegEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setTaskActive } from '../store/app/appSlice'
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation
} from '../store/api/taskApi'
import { toast } from 'react-hot-toast'

export const Task = (props) => {
  const dispatch = useDispatch()
  const [update, { isLoading: isUpdating }] = useUpdateTaskMutation()
  const [deleteTask, { isLoading: isDeleting }] = useDeleteTaskMutation()
  const { title, completed, project, _id } = props

  const handleCompleted = () => {
    const toogleCompleted = !completed
    update({ title, completed: toogleCompleted, project, _id })
  }

  const handleEdit = () => {
    dispatch(setTaskActive({ title, completed, project, _id }))
  }

  const handleDelete = () => {
    deleteTask({ _id, project })
    toast.success(
      <span>
        Task <b>{title}</b> DELETED
      </span>
    )
  }

  return (
    <div className="bg-white rounded-md shadow-sm py-2 px-4 animate__animated animate__fadeIn">
      <div className="flex items-center mb-3">
        <div className="grow">
          <h3 className="text-base font-medium text-gray-600">{title}</h3>
        </div>
        <input
          type="checkbox"
          className="block w-5 h-5 rounded accent-gray-900 cursor-pointer"
          checked={completed}
          onChange={handleCompleted}
        />
      </div>
      <ul className="flex gap-1 justify-end mt-2">
        <li className="group transition-all">
          <button
            className="py-1 px-2 rounded-md cursor-pointer group-hover:bg-slate-100"
            onClick={handleEdit}
            disabled={isUpdating}
          >
            <FaRegEdit
              className={`text-blue-500 group-hover:scale-105 ${
                isUpdating && 'text-gray-300'
              }`}
            />
          </button>
        </li>
        <li className="group">
          <button
            className="py-1 px-2 rounded-md cursor-pointer group-hover:bg-slate-100"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            <AiFillDelete
              className={`text-red-500 group-hover:scale-105 ${
                isUpdating && 'text-gray-300'
              }`}
            />
          </button>
        </li>
      </ul>
    </div>
  )
}
