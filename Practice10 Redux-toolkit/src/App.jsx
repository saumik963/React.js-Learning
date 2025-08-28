import { useState } from 'react'
import './App.css'
import CounterView from './Features/counter/counterView'
import PostsView from './Features/posts/postsView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>React+Redux-Toolkit</h1>
      <h2>Counter App</h2>
      <CounterView />
      <PostsView />
     </div>
        
    </>
  )
}

export default App
