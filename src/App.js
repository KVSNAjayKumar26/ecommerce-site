import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import { store } from './redux/store'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'
import Productpage from './Pages/Productpage'
import Cartpage from './Pages/Cartpage'
import Checkoutpage from './Pages/Checkoutpage'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product/:id' element={<Productpage />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/checkout' element={<Checkoutpage />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App