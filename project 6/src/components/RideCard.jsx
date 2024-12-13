import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

export function RideCard({ ride }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-purple-600 mr-2" />
          <div>
            <p className="text-sm font-medium">{ride.pickupLocation}</p>
            <p className="text-sm text-gray-500">{ride.dropLocation}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">₹{ride.price}</p>
          <p className="text-sm text-gray-500">{ride.distance} km</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{ride.duration} mins</span>
        </div>
        <div className="flex items-center">
          <Navigation className="h-4 w-4 mr-1" />
          <span>{ride.status}</span>
        </div>
      </div>
    </div>
  );
}