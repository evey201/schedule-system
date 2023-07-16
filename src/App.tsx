import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './router'
import { Providers } from './context/providers'

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Providers>
          <AppRouter />
        </Providers>
      </Router>
    </>
  )
}

export default App
