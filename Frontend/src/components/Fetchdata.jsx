import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { statusActions } from "../store/Statusslice";
import { dataActions } from "../store/Dataslice";

const Fetchdata = () => {
  const dispatch=useDispatch();

    useEffect(()=>{
     const products=async()=>{
      try {
        dispatch(statusActions.fetchStarted());

        const response =await fetch("https://fakestoreapi.com/products")
       const data = await response.json();
       
       dispatch(statusActions.fetchSuccess());
       dispatch(dataActions.addData(data));

      } catch (error) {
        dispatch(statusActions.fetchFailed());
        console.error(error);      
      }
     }
      products();
    },[dispatch])
  return (
    <div>    
    </div>
  )
}

export default Fetchdata
