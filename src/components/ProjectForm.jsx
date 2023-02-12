import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useCreatePorjectMutation } from '../store/api/projectApi'
import * as Yup from 'yup'

const initialValues = {
  title: '',
  description: ''
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required')
})

export const ProjectForm = () => {
  const [createProject, { isLoading, isSuccess }] = useCreatePorjectMutation()

  const onSubmit = (data) => {
    createProject(data)
  }

  const { values, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  useEffect(() => {
    if (isSuccess) {
      resetForm()
    }
  }, [isSuccess])

  return (
    <form onSubmit={handleSubmit} className="py-2 md:w-2/5 mx-auto">
      <h1 className="text-3xl font-extrabold mb-4">
        Starting creating a new project
      </h1>
      <div className="mb-3">
        <label className="block mb-1 text-gray-400">Name project</label>
        <input
          type="text"
          name="title"
          placeholder="some name"
          className="py-1 px-3 outline-none rounded-md border border-slate-300 w-full"
          autoComplete="off"
          value={values.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-400">Description project</label>
        <input
          type="text"
          name="description"
          placeholder="some description"
          className="py-1 px-3 outline-none rounded-md border border-slate-300 w-full"
          autoComplete="off"
          value={values.description}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className={`bg-neutral-800  text-white rounded-md px-4 py-2 font-bold w-full hover:bg-neutral-700 transition-colors ${
          isLoading ? 'bg-gray-400' : ''
        }`}
        disabled={isLoading}
      >
        Create new project
      </button>
    </form>
  )
}
