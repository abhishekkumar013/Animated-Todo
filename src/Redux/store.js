// store.js

import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slice' // Adjust the import to your file structure
import { loadState, saveState } from './localStorageUtils'
import formReducer from './formslice'

// Load the initial state from localStorage
const preloadedState = loadState()

const store = configureStore({
  reducer: {
    todo: appReducer,
    form: formReducer,
  },
  preloadedState,
})

// Save state to localStorage whenever it changes
store.subscribe(() => {
  saveState(store.getState())
})

export default store
