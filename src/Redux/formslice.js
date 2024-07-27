import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormOpen: (state, action) => {
      state.isOpen = true
    },
    setFormClose: (state, action) => {
      state.isOpen = false
    },
  },
})

export const { setFormOpen, setFormClose } = formSlice.actions
export default formSlice.reducer

export const SetFormOpen = () => {
  return async (dispatch, getState) => {
    dispatch(setFormOpen())
  }
}
export const SetFormClose = (id) => {
  return async (dispatch, getState) => {
    dispatch(setFormClose())
  }
}
