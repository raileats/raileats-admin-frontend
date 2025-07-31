import React from 'react';
import AdminSidebar from './AdminSidebar';
import OrdersTabs from './OrdersTabs'; // ✅ Already imported

function AdminPanel() {
  return (
    <div className="flex">
      <AdminSidebar />

      {/* Right side content area */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-semibold mb-4">Orders</h1>
        <OrdersTabs /> {/* ✅ Display tab component here */}
      </div>
    </div>
  );
}

export default AdminPanel;
