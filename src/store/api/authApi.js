import { createApi } from '@reduxjs/toolkit/query/react'
import { login, logout } from '../auth/authSlice'
import { customBaseQuery } from '../baseQuery'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload) => ({
        url: '/user/register',
        method: 'POST',
        body: payload
      })
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: '/user/login',
        method: 'POST',
        body: payload
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          const { token, user } = data
          dispatch(login(user))
          localStorage.setItem('token', token)
        } catch (err) {}
      }
    }),
    renew: builder.mutation({
      query: () => ({
        url: '/user/renew',
        method: 'POST'
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          const { token, user } = data
          dispatch(login(user))
          localStorage.setItem('token', token)
        } catch (error) {
          dispatch(logout())
        }
      }
    })
  })
})

export const { useRegisterMutation, useLoginMutation, useRenewMutation } =
  authApi
