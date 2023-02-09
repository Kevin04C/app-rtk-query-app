import { useSelector } from 'react-redux'

export const useUser = () => {
  const user = useSelector((state) => state.auth.user)
  return {
    ...user,
    name: user.name.toUpperCase()
  }
}
