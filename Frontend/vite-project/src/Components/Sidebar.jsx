import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
const Sidebar = () => {
    const [Company_list, setCompany_list] = useState([])
    const [selected, setselected] = useState(null)
    useEffect(()=>{
        GET_Company_List()
    },[])

    const GET_Company_List=async()=>{
        try {
            const res=await axios.get('http://localhost:8000/stock')
            if(res.data){
                setCompany_list(res.data)
            }
        } catch (error) {
            
        }
    }
    if(!Company_list){
        return <div className="text-center w-2xl mx-auto">Loading...</div>
    }
  return (
    <div className="w-[25vw] flex flex-col text-gray-200 shadow-lg bg-gray-800 min-h-screen gap-18 pt-10 px-5">
      <div className="text-2xl font-bold text-green-400 border-b border-gray-800 p-3">📈 Stock Dashboard</div>
      <ul className="list-none flex flex-col gap-15 overflow-auto mb-10 items-center ">
        {Company_list && (
            Company_list.map((item,index)=>{
                return <li key={index} onClick={()=>setselected(item.Symbol)} className={`py-3 font-bold px-15 rounded-md cursor-pointer ${selected===item.Symbol? "bg-red-400 text-white":"hover:bg-gray-300 hover:text-white"} transition-colors duration-200`}>{item.Symbol}</li>
            })
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
