import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { HasErrorForm } from '../components/HasErrorForm'
import { useLoginMutation } from '../store/api/authApi'
import { Spinner } from '../views/Spinner'

const initialValues = {
  email: 'orealy@gmail.com',
  password: '123456'
}
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('The email must be a valid email')
    .required('The email is required'),
  password: Yup.string()
    .required('The password is required')
    .min(6, 'The password must be more 6 characters')
})

export const LoginPage = () => {
  const [startLogin, { isLoading, error }] = useLoginMutation()
  const msg = error?.data?.msg

  const onSubmit = (data) => {
    startLogin(data)
  }
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema
    })

  return (
    <section className="bg-slate-100 h-screen px-5 lg:px-0">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-center">
        <form
          className="bg-white px-5 py-9 rounded-md shadow w-full md:max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6">LOGIN</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-400">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="w-full bg-gray-50 p-2 outline-none border border-gray-200 rounded-md"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
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
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <HasErrorForm
              hasError={errors.password && touched.password}
              text={errors.password}
            />
          </div>
          <HasErrorForm
            hasError={msg}
            text={msg}
            className="text-center mb-4 text-sm font-medium"
          />
          <button
            type="submit"
            className={`text-white py-2 px-3 w-full rounded-md font-bold  transition-colors mb-3 bg-neutral-900 hover:bg-neutral-700 flex justify-center items-center gap-4 ${
              isLoading && 'bg-slate-400'
            }`}
            disabled={isLoading}
          >
            {isLoading && <Spinner />} LOGIN
          </button>
          <div className="flex justify-end">
            <Link to="/auth/register" className="text-gray-500 hover:underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
