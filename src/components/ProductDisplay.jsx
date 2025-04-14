import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";
import ActualProduct from "./ActualProduct";

const ProductDisplay = () => {
   const isLoading=useSelector((state)=>state.status.currentFetching);

   const Done=useSelector((state)=>state.status.fetchDone)

   const Error=useSelector((state)=>state.status.fetchFailed)

    if(isLoading){
      return <ShimmerUI/>
    }
if(Done){
  return <ActualProduct/>
}
if (Error) {
  return (
    <p className="text-red-500 text-center mt-4">
       Error: Failed to fetch product data.
    </p>
  );
}

return (
  <p className="text-gray-500 text-center mt-4">
    Waiting for data to load...
  </p>
);
}


export default ProductDisplay;
