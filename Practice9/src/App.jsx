import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React + Redux</h1>
      <Todos />
    </>
  )
}

export default App


// step1: install packages
// step2: constants define
// step3: async action creator
// step4: reducer
// step5: Create store
// step6: Provide store
// step7: use store
// step8: adding styles css