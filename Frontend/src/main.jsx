import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Registration from "./routers/Registration.jsx"
import Login from './routers/Login.jsx'
import Profile from './routers/Profile.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import HomePage from './components/HomePage.jsx'
const router=createBrowserRouter([
 {
   path:"/",
   element:<App/>,
   children:[
    { 
        index: true,           
        element: <HomePage/>   
      },
   {path:"/signup", element:<Registration/> }, 
   {path:"/login",element:<Login/>},
    {path:"/profile",element:<Profile/>}
   ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
)
