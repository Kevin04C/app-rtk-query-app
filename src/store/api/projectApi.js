import { createApi } from '@reduxjs/toolkit/query/react'
import { customBaseQuery } from '../baseQuery'

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: customBaseQuery,
  tagTypes: ['projects'],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: (id) => ({
        url: `/projects/${id}`
      }),
      providesTags: ['projects']
    }),
    createPorject: builder.mutation({
      query: (payload) => ({
        url: '/projects/',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['projects']
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['projects']
    })
  })
})

export const {
  useGetProjectsQuery,
  useCreatePorjectMutation,
  useDeleteProjectMutation
} = projectApi
