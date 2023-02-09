import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />
}
