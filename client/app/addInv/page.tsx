import InvForm from '@/components/formCards/InvForm';
import React, { useState } from 'react';

export default function AddInventory() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <InvForm /> {/* Render the invForm component */}
    </div>
  );
}