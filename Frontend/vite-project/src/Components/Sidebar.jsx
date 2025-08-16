import React from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
const Sidebar = () => {
    const [Company_list, setCompany_list] = useState([])
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
    <div className="w-[25vw] flex flex-col h-screen">
      <div>📈 Stock Dashboard</div>
      <ul className="list-none flex flex-col gap-3">
        {Company_list && (
            Company_list.map((item,index)=>{
                return <li key={index}>{item.Symbol}</li>
            })
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
