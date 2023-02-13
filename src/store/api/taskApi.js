import { createApi } from '@reduxjs/toolkit/query/react'
import { customBaseQuery } from '../baseQuery'

export const taksApi = createApi({
  reducerPath: 'taksApi',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getTaksProjectById: builder.query({
      query: (id) => `task/${id}`,
      providesTags: ['task']
    }),
    createTask: builder.mutation({
      query: (payload) => ({
        url: 'task',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['task']
    }),
    updateTask: builder.mutation({
      query: (payload) => {
        const id = payload._id
        return {
          url: `task/${id}`,
          method: 'PUT',
          body: payload
        }
      },
      invalidatesTags: ['task']
    }),
    deleteTask: builder.mutation({
      query: (payload) => {
        const { _id, project } = payload
        return {
          url: `task/${_id}`,
          method: 'DELETE',
          body: { project }
        }
      },
      invalidatesTags: ['task']
    })
  })
})

export const {
  useGetTaksProjectByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = taksApi
