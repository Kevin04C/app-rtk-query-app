import { useGetTaksProjectByIdQuery } from '../store/api/taskApi'

export const useTaskProject = (id) => {
  const { isLoading, isError, data } = useGetTaksProjectByIdQuery(id)
  return {
    isLoading,
    isError,
    taks: data?.taks,
    projectTitle: data?.project
  }
}
