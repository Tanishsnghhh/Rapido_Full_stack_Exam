import React from 'react';

export function ServiceCard({ service, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(service)}
      className={`w-full p-4 rounded-lg ${
        selected ? 'bg-purple-100 border-2 border-purple-600' : 'bg-white border border-gray-200'
      } transition-all`}
    >
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{service.icon}</span>
        <div className="flex-1 text-left">
          <h3 className="font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-500">{service.description}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">₹{service.basePrice}</p>
          <p className="text-xs text-gray-500">base fare</p>
        </div>
      </div>
    </button>
  );
}