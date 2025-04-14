
 import { Shimmer } from "react-shimmer";
 
const ShimmerUI = () => {
  
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="w-full h-[250px] bg-gray-200 rounded-md overflow-hidden">
            <Shimmer width="100%" height={250} />
          </div>
        ))}
      </div>
      )
    }


export default ShimmerUI
