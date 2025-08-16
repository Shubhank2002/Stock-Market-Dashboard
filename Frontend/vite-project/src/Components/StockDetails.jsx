import React from 'react'
import { useContext } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { Data } from '../Context/StockContext';

export const COLORS= ["#00C49F", "#FF8042", "#0088FE", "#FFBB28"];

const StockDetails = () => {
    const {stockdetails,setstockdetails}=useContext(Data)
    //  console.log(stockdetails)
     if(!stockdetails){
        return <div>Loading...</div>
     }
  return (
    <div>
        {stockdetails.Symbol}
    </div>
  )
}

export default StockDetails
