import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/projects'
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => '/'
    })
  })
})

export const { useGetProjectsQuery } = projectApi
