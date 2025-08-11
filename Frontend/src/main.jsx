import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Registration from "./routers/Registration.jsx"
import { Provider } from 'react-redux'
import store from './store/index.js'
import {RouterProvider, createBrowserRouter} from "react-router-dom"

const router=createBrowserRouter([
 {
   path:"/",
   element:<App/>,
   children:[
   
   {path:"/user", element:<Registration/> }, 
  

   ]
 }
])

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
   <RouterProvider  router={router}/>
 <StrictMode>
   
  </StrictMode>,
  </Provider>
 
)
