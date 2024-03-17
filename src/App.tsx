import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./Home"
import { NameProvider } from "./provider"

function App() {
  const [username, setUsername] = useState('')

  const handleChangeUsername = (name: string) => {
    setUsername(name)
  }

  return (
    <NameProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home username={username} setUsername={handleChangeUsername}/>}/>
          </Routes>
      </Router>
    </NameProvider>
  )
}

export default App
