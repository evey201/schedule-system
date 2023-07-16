import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './router'
// import { AppRouter } from './router'

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  )
}

export default App
