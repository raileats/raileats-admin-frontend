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
import React from 'react';
import './AdminSidebar.css';

const AdminSidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    'Dashboard',
    'Orders',
    'Outlets',
    'Menu',
    'Master',
    'Train',
    'Logout',
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-title">RailEats Admin</div>
      {menuItems.map((item) => (
        <div
          key={item}
          className={`sidebar-item ${activeSection === item ? 'active' : ''}`}
          onClick={() => setActiveSection(item)}
        >
          {item}
        </div>
      ))}
      <div className="sidebar-version">v.21</div>
    </div>
  );
};

export default AdminSidebar;
// src/components/AdminSidebar.js

<div className="sidebar">
  <ul>
    <li><a href="#">Dashboard</a></li>
    <li><a href="#">Orders</a></li>
    ...
  </ul>
</div>
