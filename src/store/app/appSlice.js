import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  taskActive: null
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTaskActive: (state, { payload }) => {
      state.taskActive = payload
    },
    clearTaskActive: (state) => {
      state.taskActive = null
    }
  }
})

export const { setTaskActive, clearTaskActive } = appSlice.actions
