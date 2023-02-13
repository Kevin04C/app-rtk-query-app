import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { MdError } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { TaskForm } from '../components/TaskForm'
import { TaksList } from '../components/TaksList'
import { useTaskProject } from '../hooks/useTaskProject'
import { Layout } from '../Layout/Layout'
import { useDispatch } from 'react-redux'
import { clearTaskActive } from '../store/app/appSlice'

export const ProjectPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { projectTitle, taks, isError, isLoading } = useTaskProject(id)

  const handleBack = () => {
    navigate(-1)
    dispatch(clearTaskActive())
  }

  if (isError) {
    return (
      <Layout>
        <div className="flex gap-2 items-center text-red-500 w-full justify-center mt-2">
          <MdError />
          <span>Error to entering project</span>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="pb-14">
        <Header />
        <button
          className="mt-1 py-1 px-4 border border-gray-400 rounded bg-slate-200 hover:bg-slate-100 transition-all mb-2"
          onClick={handleBack}
        >
          <BiArrowBack />
        </button>
        <h2 className="text-slate-500 text-lg my-4">
          Project: <b className="text-neutral-900">{projectTitle} 🚀</b>{' '}
        </h2>
        <TaskForm project={id} />
        {isLoading && <p>Cargando...</p>}
        <TaksList taksList={taks} />
      </div>
    </Layout>
  )
}
