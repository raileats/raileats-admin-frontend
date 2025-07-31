import React from "react";

function AdminSidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <ul className="space-y-4">
        <li>Dashboard</li>
        <li>Orders</li>
        <li>Outlets</li>
        <li>Menu</li>
        <li>Master</li>
        <li>Train</li>
        <li>Logout</li>
      </ul>
      <div className="absolute bottom-2 left-4 text-xs text-gray-400">v.21</div>
    </div>
  );
}

export default AdminSidebar;