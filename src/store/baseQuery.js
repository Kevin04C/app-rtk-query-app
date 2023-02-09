import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { SETTINGS } from '../config/settings'

export const customBaseQuery = fetchBaseQuery({
  baseUrl: SETTINGS.API,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})
