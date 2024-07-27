// Load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todoState')
    if (serializedState === null) {
      console.log('No state found in localStorage, returning undefined')
      return undefined // Return undefined if no state is found
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Could not load state from localStorage:', err)
    return undefined
  }
}

// Save state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('todoState', serializedState)
  } catch (err) {
    console.error('Could not save state to localStorage:', err)
  }
}
