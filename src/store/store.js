import { configureStore } from '@reduxjs/toolkit'
import { projectApi } from './api/projectApi'

export const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.middleware
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware)
})
