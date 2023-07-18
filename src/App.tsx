import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './router'
import { Providers } from './context/providers'
import { ModalRoot } from './components'

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ModalRoot id="modal-root" />
        <Providers>
          <AppRouter />
        </Providers>
      </Router>
    </>
  )
}

export default App
