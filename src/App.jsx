import { Route, Routes } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './pages/Home'
import Page1 from './pages/1'
import Page2 from './pages/2'
import './App.css'


const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/1' element={<Page1 />} />
          <Route path='/2' element={<Page2 />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
