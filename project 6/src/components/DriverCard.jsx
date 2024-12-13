import React from 'react';
import { Phone, Star } from 'lucide-react';

export function DriverCard({ driver }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-4">
        <img
          src={driver.avatar}
          alt={driver.name}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex-1">
          <h3 className="font-semibold">{driver.name}</h3>
          <p className="text-sm text-gray-500">{driver.vehicleNumber}</p>
          <div className="flex items-center mt-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm ml-1">{driver.rating}</span>
          </div>
        </div>
        <a
          href={`tel:${driver.phone}`}
          className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}