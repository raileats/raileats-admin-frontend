// src/components/OrdersTabs.js

import React, { useState } from 'react';

const tabs = [
  "Booked",
  "In Kitchen",
  "Out for Delivery",
  "Delivered",
  "Not Delivered",
  "Cancelled",
  "Error"
];

function OrdersTabs() {
  const [activeTab, setActiveTab] = useState("Booked");

  return (
    <div>
      <div className="flex flex-wrap space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 border rounded-md bg-white shadow">
        <p className="text-gray-800 font-semibold">Showing: {activeTab} Orders</p>
        {/* 🔁 You can add list of orders here based on activeTab */}
      </div>
    </div>
  );
}

export default OrdersTabs;
