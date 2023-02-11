import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { SETTINGS } from '../config/settings'

export const customBaseQuery = fetchBaseQuery({
  baseUrl: SETTINGS.API,
  prepareHeaders: (headers) => {
    headers.set('Content-type', 'application/json')
    headers.set('authorization', 'Bearer ' + localStorage.getItem('token'))
    return headers
  }
})
