
import { useSelector } from "react-redux"
import Showdata from "./ShowData";


const ActualProduct = () => {
  const product=useSelector((state)=>state.data.homeData);
 
      
return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {product.map((item) => (
          <Showdata key={item.id} item={item} />
        ))}
      </div> 
 )}
export default ActualProduct
