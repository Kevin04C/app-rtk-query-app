import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import {
  useCreateTaskMutation,
  useUpdateTaskMutation
} from '../store/api/taskApi'
import { clearTaskActive } from '../store/app/appSlice'
import { HasErrorForm } from './HasErrorForm'

const initialValues = {
  title: ''
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('the task is required')
})

export const TaskForm = ({ project }) => {
  const dispatch = useDispatch()
  const { taskActive } = useSelector((state) => state.app)
  const [createTask, { isLoading, isSuccess: created }] =
    useCreateTaskMutation()
  const [updateTask, { isLoading: isUpdating, isSuccess: updated }] =
    useUpdateTaskMutation()

  const onSubmit = (data) => {
    if (!data._id) {
      createTask({ ...data, project })
      return
    }
    updateTask(values)
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    resetForm
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  useEffect(() => {
    if (taskActive) {
      setValues(taskActive)
    }
  }, [taskActive])

  useEffect(() => {
    if (createTask || updated) {
      resetForm()
      dispatch(clearTaskActive())
    }
  }, [created, updated])

  return (
    <form className="py-2 md:w-2/5 mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-extrabold mb-4">Create a new task</h1>
      <div className="mb-3">
        <label className="block mb-1 text-gray-400">Name taks</label>
        <input
          type="text"
          name="title"
          placeholder="some task"
          className="py-1 px-3 outline-none rounded-md border border-slate-300 w-full"
          autoComplete="off"
          onChange={handleChange}
          value={values.title}
          onBlur={handleBlur}
        />
      </div>
      <HasErrorForm
        hasError={errors.title && touched.title}
        text={errors.title}
        className="mt-2 mb-2"
      />
      <button
        type="submit"
        className="bg-neutral-800  text-white rounded-md px-4 py-2 font-bold w-full hover:bg-neutral-700 transition-colors"
        disabled={isLoading || isUpdating}
      >
        {' '}
        {values?._id ? 'Update task' : 'Create task'}
      </button>
    </form>
  )
}
