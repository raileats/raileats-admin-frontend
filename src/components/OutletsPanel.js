import React, { useState } from 'react';
import AddEditOutletForm from './AddEditOutletForm';
import OutletList from './OutletList';

const OutletsPanel = () => {
  const [view, setView] = useState('list'); // 'list' | 'add' | 'edit'
  const [selectedOutlet, setSelectedOutlet] = useState(null);

  const handleAddClick = () => {
    setSelectedOutlet(null);
    setView('add');
  };

  const handleEditClick = (outlet) => {
    setSelectedOutlet(outlet);
    setView('edit');
  };

  const handleBack = () => {
    setSelectedOutlet(null);
    setView('list');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Outlets Panel</h2>
      {view === 'list' && (
        <OutletList onAddClick={handleAddClick} onEditClick={handleEditClick} />
      )}
      {(view === 'add' || view === 'edit') && (
        <AddEditOutletForm
          mode={view}
          outlet={selectedOutlet}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default OutletsPanel;
