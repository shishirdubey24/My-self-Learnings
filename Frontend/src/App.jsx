import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import { useEffect, useState,  } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { dataActions } from './store/Dataslice'


function App() {
  const [User, setUser] = useState(null);
const dispatch=useDispatch();
  useEffect(() => {
    console.log("Request for JWT ");
    const checkUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/user", {
          withCredentials: true, 
        });
          console.log("Response from backend:", res.data);
        setUser(res.data.user); 
        dispatch(dataActions.addUser(res.data.user))
      } catch (error) {
        console.log("User not logged in", error);
        setUser(null);
      }
    };

    checkUser();
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
   
    
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
    
    </div>
  )
}

export default App
