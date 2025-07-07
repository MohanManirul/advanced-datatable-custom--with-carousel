import { useEffect, useMemo, useState } from "react";
import useUsers from "../../hooks/useUsers";



const MyAdvocates = () => {

  const {data} = useUsers() // this is hook

  const [searchTerm, setSearchTerm] = useState(""); 
  const [pageSise , setPageSize] = useState(10)
  const [currentPage , setCurrentPage] = useState(1)
  const [sortConfig , setSortConfig] = useState(null)

 
  const filteredData = useMemo(() => {
    const result = data.filter((item) =>
      Object.values(item).some((val) =>
        val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    console.log("Filtered Result:", result);

    return result;
  }, [data, searchTerm]);


const sortedData = useMemo(()=>{
    if(!sortConfig) return filteredData;

    const sorted = [...filteredData].sort((a,b)=>{
        const aVal = a[sortConfig.key]
        const bVal = b[sortConfig.key]


        if(typeof aVal ==='string') return aVal.toLowerCase().localeCompare(bVal.toLowerCase)
        if(typeof aVal === 'number') return aVal - bVal
        return 0;
    });

    return sortConfig.direction === 'asc'?sorted:sorted.reverse()

},[filteredData , sortConfig]) ;


const totalPages = Math.ceil(sortedData.length / pageSise )

 
const startIdX = (currentPage -1) * pageSise
const endIdX = currentPage * pageSise;

const currentData = sortedData.slice(startIdX , endIdX)
 console.log("current data ",currentData);
 
const handleSort = (key) =>{
    if(sortConfig?.key ===key){
        setSortConfig({
            key, 
            direction:sortConfig.direction === 'asc'?'desc' : 'asc'
        });
        
    }else{
        setSortConfig({key,direction:'asc'});
    }
}


  return (
    <div className="datatable-background">
      <h1>Advocate List</h1>

      {/* search controll  */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <label className="rows-per-page-label">Rows Per Page: </label>
          <select 
            
            className="rows-per-page-select"
            value={pageSise}
            onChange={(e)=>setPageSize(Number(e.target.value))}
            
        >
            {[5, 10, 25, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="table-wrapper">
        <table className="table-layout">
          <thead className="bg-gray-100">
            <tr>

            {["name","email","phone",'address'].map((key)=>(
               <th
                key={key}
                onClick={()=>handleSort(key)}
                className="table-head-layout"               
               >
                <div className="table-head-name">
                    <span className="capitalize">{key}</span>
                    {
                        sortConfig?.key === key && (
                            <span>
                                {sortConfig.direction === 'asc'?'🔼':'🔽'}
                            </span>
                        )
                    }
                </div>

               </th> 
            ))}

              <th className="actions">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
                currentData.length > 0 ? (
                    currentData.map((row , index)=>(
                        <tr key={index} className="hover:bg-gray-50 border-t">
                            <td className="px-4 py-2 whitespace-nowrap">{row.name}</td>
                            <td className="px-4 py-2 whitespace-nowrap">{row.email}</td>
                            <td className="px-4 py-2 whitespace-nowrap">{row.phone}</td>
                            <td className="px-4 py-2 whitespace-nowrap">{row.address.city}</td>
                            <td className="action-buttons">
                                <button className="edit-button">
                                    Edit
                                </button>
                                <button className="delete-button">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={4} className="text-center py-4 text-gray-500">
                            No Data Found .
                        </td>
                    </tr>
                )

            }
           

          </tbody>
        </table>
      </div>

      {/* pagination ui */}

      <div className="pagination-container">
        <button className="paginationBtn"
            onClick={()=>setCurrentPage((p)=>Math.max(p-1,1))}
            disabled={currentPage===1}        
        >
            Prev
        </button>

            { [...Array(totalPages)].map((_,i)=>(
            
                <button 
                    key={i}
                    onClick={()=>setCurrentPage(i+1)}
                    className={`px-3 py-1 rounded ${
                        currentPage ===i+1
                        ? "bg-blue-700 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    
                    }`}
                
                >
                
                {i+1}
                
                </button>
            ))

            }
    

        <button 
        
            onClick={()=>setCurrentPage((p)=>Math.min(p+1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
        >
            Next
        </button>
      </div>
    </div>
  );
};

export default MyAdvocates;
