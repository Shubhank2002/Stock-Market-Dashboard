import React from "react";
import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Data } from "../Context/StockContext";

export const COLORS = ["#00C49F", "#FF8042", "#0088FE", "#FFBB28"];

const StockDetails = () => {
  const { stockdetails, setstockdetails } = useContext(Data);
  //  console.log(stockdetails)
  if (!stockdetails) {
    return <div>Loading...</div>;
  }
  const ohlcData = [
    { name: "Open", value: stockdetails.Open },
    { name: "High", value: stockdetails.High },
    { name: "Low", value: stockdetails.Low },
    { name: "Close", value: stockdetails.Close },
  ];
  const volumeData = [
    {
      name: stockdetails.Symbol,
      Volume: stockdetails.Volume,
      DeliverableVolume: stockdetails.DeliverableVolume,
    },
  ];
  return (
    <div className="flex-1 bg-blue-200 overflow-y-auto p-6 max-h-[100vh]">
      <header className="flex justify-around items-center mb-6 w-[100%]">
        <h1 className="text-3xl  text-blue-800/80 text-center underline">
          <strong>{stockdetails.Symbol}</strong> STOCK DATA
        </h1>
        <span className="text-gray-600 text-sm">
          Last updated: {stockdetails.Date}
        </span>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl shadow border border-gray-200">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            OHLC Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ohlcData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl shadow border border-gray-200">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Volume vs Deliverable
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={volumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fill: "#374151" }} />
              <YAxis tick={{ fill: "#374151" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="Volume" fill="#0088FE" radius={[6, 6, 0, 0]} />
              <Bar
                dataKey="DeliverableVolume"
                fill="#00C49F"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl shadow border border-gray-200  p-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Stock Information
        </h3>
        <table className="w-full text-left border-collapse">
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold w-1/2">Series</td>
              <td className="p-2 w-1/2">{stockdetails.Series}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold">VWAP</td>
              <td className="p-2">{stockdetails.VWAP}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold">Turnover</td>
              <td className="p-2">{stockdetails.Turnover}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 font-semibold">Prev Close</td>
              <td className="p-2">{stockdetails.PrevClose}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Deliverble %</td>
              <td className="p-2">
                {(stockdetails.Deliverble * 100).toFixed(2)}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockDetails;
