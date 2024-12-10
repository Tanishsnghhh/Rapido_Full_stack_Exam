import React from 'react';
import { mockUser, mockRides } from '../data/mockData';
import { RideCard } from '../components/RideCard';

export function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{mockUser.name}</h2>
              <p className="text-gray-500">{mockUser.phone}</p>
              <p className="text-gray-500">{mockUser.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Rides</h2>
          <div className="space-y-4">
            {mockRides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}