import { useState } from 'react'
import Welcome from './Welcome'
import Skills from './Skills'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
      <Welcome name='virat' country='India'/>
      <Skills skill={['React','Node','Express','MongoDb']}/>
      <h1>Hello World</h1>
    </>
  )
}

export default App
