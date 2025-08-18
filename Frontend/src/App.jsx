
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
function App() {

  return (
  <>
      <Header/>
       <Outlet/>
      <Footer/>
  </>
  )
}

export default App
