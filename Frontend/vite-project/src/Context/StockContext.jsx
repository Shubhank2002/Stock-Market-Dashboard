import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const Data=createContext()


const StockContext = ({children}) => {
    const [selected, setselected] = useState(null)
    const [stockdetails,setstockdetails]=useState(null)
    
  return (
   <Data.Provider value={{selected,setselected,setstockdetails,stockdetails}}>
        {children}
   </Data.Provider>
  )
}

export default StockContext
