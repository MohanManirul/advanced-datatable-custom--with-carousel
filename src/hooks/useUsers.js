import { useEffect, useState } from "react";
import { users } from "../ApiRequest/ApiRequest";

const useUsers = () => {
      const [data , setData] = useState([]);

        // fetching data
        useEffect(()=>{
          const fetchData = async () =>{
      
            try{

                const res = await users(); // api call               
                setData(res)

            }catch(err){
              console.error("Error", err);
              
            }
           
            
          };
         fetchData();
        },[]) ;

        return {data}

}

export default useUsers ;