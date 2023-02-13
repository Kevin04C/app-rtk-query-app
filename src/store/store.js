import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from './api/authApi'
import { projectApi } from './api/projectApi'
import { taksApi } from './api/taskApi'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [taksApi.reducerPath]: taksApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      projectApi.middleware,
      taksApi.middleware
    ])
})

setupListeners(store.dispatch)
