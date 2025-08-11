
import './App.css'
import Fetchdata from './components/Fetchdata'
import Header from './components/Header'
import ProductDisplay from './components/ProductDisplay'
//import ShimmerUI from './components/ShimmerUI'
import { Outlet } from 'react-router'
function App() {


  return (
  <>
      <Header/>
       <Outlet/>
      <Fetchdata/>
       <ProductDisplay/>
     
  </>
  )
}

export default App
