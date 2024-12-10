import React from 'react';
import { Clock } from 'lucide-react';

export function RecentLocations({ locations, onSelect }) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Locations</h3>
      <div className="space-y-2">
        {locations.map((location, index) => (
          <button
            key={index}
            onClick={() => onSelect(location)}
            className="w-full flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg"
          >
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{location}</span>
          </button>
        ))}
      </div>
    </div>
  );
}