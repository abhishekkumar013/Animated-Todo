import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = []

const appSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nanoid(),
        desc: action.payload.desc,
        filesize: action.payload.filesize,
        tag: {
          isOpen: action.payload.isOpen,
          tagTitle: action.payload.tagTitle,
          tagColor: action.payload.tagColor,
        },
      })
    },
    removeTodo: (state, action) => {
      return state.filter((el) => el.id !== action.payload)
    },
  },
})

export const { addTodo, removeTodo } = appSlice.actions
export default appSlice.reducer

export const AddTodo = (desc, filesize, isOpen, tagTitle, tagColor) => {
  return async (dispatch, getState) => {
    dispatch(addTodo({ desc, filesize, isOpen, tagTitle, tagColor }))
  }
}
export const RemoveTodo = (id) => {
  return async (dispatch, getState) => {
    dispatch(removeTodo(id))
  }
}
