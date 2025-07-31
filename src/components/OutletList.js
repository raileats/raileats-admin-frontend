// src/components/OutletList.js

import React from 'react';

const OutletList = ({ outlets, onEdit }) => {
  if (!outlets || outlets.length === 0) {
    return <p>No outlets found.</p>;
  }

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Station</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {outlets.map((outlet, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{outlet.name}</td>
              <td className="py-2 px-4 border-b">{outlet.station}</td>
              <td className="py-2 px-4 border-b">{outlet.phone}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => onEdit(outlet)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutletList;
