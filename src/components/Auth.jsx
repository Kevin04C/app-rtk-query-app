import { router } from '../router/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { useRenewMutation } from '../store/api/authApi'

export const Auth = () => {
  const [renewToken] = useRenewMutation()
  const { isAuthenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!isAuthenticated && token) {
      renewToken()
    }
  }, [])

  return <RouterProvider router={router} />
}
