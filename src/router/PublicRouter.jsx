import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export const PublicRouter = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />
}
