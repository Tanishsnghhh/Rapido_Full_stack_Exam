import React from 'react';

export function PaymentMethodSelector({ methods, selected, onSelect }) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold mb-3">Payment Method</h3>
      <div className="grid grid-cols-2 gap-2">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onSelect(method)}
            className={`p-3 rounded-lg flex items-center space-x-2 ${
              selected?.id === method.id
                ? 'bg-purple-100 border-2 border-purple-600'
                : 'bg-white border border-gray-200'
            }`}
          >
            <span className="text-xl">{method.icon}</span>
            <span className="font-medium">{method.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}