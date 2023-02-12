import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { MdError } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { TaksForm } from '../components/TaksForm'
import { Layout } from '../Layout/Layout'

export const ProjectPage = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  // if (isError) {
  //   return (
  //     <div className="flex gap-2 items-center text-red-500 w-full justify-center mt-2">
  //       <MdError />
  //       <span>Error to entering project</span>
  //     </div>
  //   )
  // }

  return (
    <Layout>
      <button
        className="py-1 px-4 border border-gray-400 rounded bg-slate-200 hover:bg-slate-100 transition-all mb-3 "
        onClick={handleBack}
      >
        <BiArrowBack />
      </button>
      <h2 className="text-slate-500 text-lg my-4">
        Project: <b className="text-neutral-900">MY project 🚀</b>{' '}
      </h2>
      <TaksForm />
    </Layout>
  )
}
