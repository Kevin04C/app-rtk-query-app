import { IoExitOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useUser } from '../hooks/useUser'
import { logout } from '../store/auth/authSlice'

export const Header = () => {
  const { name } = useUser()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className="flex justify-between mb-2">
      <h3 className="font-bold text-blue-500">{name}</h3>
      <button
        className="py-1 px-2  rounded flex gap-3 items-center text-red-500 hover:bg-red-100 transition-colors"
        onClick={handleLogout}
      >
        <IoExitOutline />
        Salir
      </button>
    </nav>
  )
}
