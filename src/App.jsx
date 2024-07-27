import Background from './components/Background'
import Foreground from './components/Foreground'
import { useDispatch } from 'react-redux'
import { SetFormOpen } from './Redux/formslice.js'

function App() {
  const dispatch = useDispatch()
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
    </div>
  )
}

export default App
