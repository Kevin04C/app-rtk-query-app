import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { HasErrorForm } from '../components/HasErrorForm'
import { useRegisterMutation } from '../store/api/authApi'
import { Spinner } from '../views/Spinner'
import { useEffect } from 'react'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('The name is required'),
  email: Yup.string().email().required('Theme emial es required'),
  password: Yup.string()
    .required('The password is required')
    .min(6, 'The password must be more 6 characters'),
  confirmPassword: Yup.string()
    .required('The password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export const RegisterPage = () => {
  const [register, { isLoading, error, reset }] = useRegisterMutation()
  const msg = error?.data?.msg
  const onSubmit = (data) => {
    register(data)
  }
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
    resetForm
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        resetForm()
        reset()
      }, 3000)
    }
  }, [msg])

  const isFormValid = !isValid || !dirty
  const classBtn = `text-white py-2 px-3 w-full rounded-md font-bold  transition-colors mb-3 ${
    isFormValid
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-neutral-900 hover:bg-neutral-700'
  }`

  return (
    <section className="bg-slate-100 h-screen px-5 lg:px-0">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-center">
        <form
          className="bg-white px-5 py-9 rounded-md shadow w-full md:max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6">REGISTER</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-400">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full bg-gray-50 p-2 outline-none border border-gray-200 rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              autoComplete="off"
            />
            <HasErrorForm
              hasError={errors.name && touched.name}
              text={errors.name}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-400">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="w-full bg-gray-50 p-2 outline-none border border-gray-200 rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              autoComplete="off"
            />
            <HasErrorForm
              hasError={errors.email && touched.email}
              text={errors.email}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block mb-2 text-gray-400">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full bg-gray-50 p-2 outline-none border border-gray-200 rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <HasErrorForm
              hasError={errors.password && touched.password}
              text={errors.password}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-gray-400"
            >
              Confirm password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="confirmPassword"
              className="w-full bg-gray-50 p-2 outline-none border border-gray-200 rounded-md"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <HasErrorForm
              hasError={errors.confirmPassword && touched.confirmPassword}
              text={errors.confirmPassword}
            />
          </div>
          <HasErrorForm
            hasError={msg}
            text={msg}
            className="text-center mb-4 text-sm font-medium"
          />
          <button
            type="submit"
            className={classBtn}
            disabled={isFormValid || isLoading}
          >
            {isLoading && <Spinner />}
            REGISTER
          </button>
          <div className="flex justify-end">
            <Link to="/auth/login" className="text-gray-500 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
