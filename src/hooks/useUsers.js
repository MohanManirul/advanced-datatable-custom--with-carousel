import { useEffect, useState } from "react";
import { usersData } from "../ApiRequest/ApiRequest";

const useUsers = () => {
      const [data , setData] = useState([]);

        // fetching data
        useEffect(()=>{
          const fetchData = async () =>{
      
            try{

                const res = await usersData(); // api call               
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