import React from 'react';

function CategoryCards() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Categories</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ backgroundColor: '#fff', padding: '1rem', border: '1px solid #ccc' }}>Veg</div>
        <div style={{ backgroundColor: '#fff', padding: '1rem', border: '1px solid #ccc' }}>Non-Veg</div>
        <div style={{ backgroundColor: '#fff', padding: '1rem', border: '1px solid #ccc' }}>Snacks</div>
      </div>
    </div>
  );
}

export default CategoryCards;