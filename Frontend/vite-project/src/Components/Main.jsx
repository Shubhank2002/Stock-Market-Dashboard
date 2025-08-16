import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const sampleData = [
  { name: "TCS", value: 3200 },
  { name: "INFY", value: 1550 },
  { name: "HDFC", value: 2850 },
  { name: "RELIANCE", value: 2520 },
  { name: "ICICI", value: 920 },
];

const Main = () => {
  return (
    <div className="flex-1 bg-gray-100 overflow-y-auto p-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        📈 Welcome to the Stock Dashboard
      </h1>
      <p className="text-gray-600 mb-8 max-w-xl">
        Select a company from the sidebar to view detailed stock analytics like
        OHLC distribution, trading volumes, and performance charts.
      </p>
      <div className="bg-gray-50 p-6 rounded-xl shadow border border-gray-200 w-full md:w-2/3">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">
          Sample Market Snapshot
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fill: "#374151" }} />
            <YAxis tick={{ fill: "#374151" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
            />
            <Bar dataKey="value" fill="#00C49F" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Main;
