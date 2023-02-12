import { useSelector } from 'react-redux'
import { useGetProjectsQuery } from '../store/api/projectApi'

export const useProject = () => {
  const { id } = useSelector((state) => state.auth.user)
  const { isLoading, isSuccess, isError, data } = useGetProjectsQuery(id)
  const projects = data?.projects

  return {
    isLoading,
    isSuccess,
    isError,

    projects
  }
}
