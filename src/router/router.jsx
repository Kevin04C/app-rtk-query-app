import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { LoginPage } from '../pages/LoginPage'
import { ProjectPage } from '../pages/ProjectPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRouter } from './PublicRouter'

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'project/:id',
        element: <ProjectPage />
      }
    ]
  },
  {
    path: 'auth',
    element: <PublicRouter />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }
])
