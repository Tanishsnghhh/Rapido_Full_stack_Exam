import React, { useEffect } from 'react';
import { X, MapPin, Navigation } from 'lucide-react';
import { useRide } from '../context/RideContext';
import { DriverCard } from './DriverCard';

export function RideBookingModal({ onClose }) {
  const { state, dispatch } = useRide();

  useEffect(() => {
    if (state.bookingStep === 'searching') {
      const timer = setTimeout(() => {
        dispatch({ type: 'ASSIGN_DRIVER' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.bookingStep, dispatch]);

  const renderContent = () => {
    switch (state.bookingStep) {
      case 'searching':
        return (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Finding your ride...</h3>
            <p className="text-gray-500">Please wait while we connect you with a driver</p>
          </div>
        );
      case 'confirmed':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Driver Assigned!</h3>
            {state.assignedDriver && <DriverCard driver={state.assignedDriver} />}
            <button
              onClick={() => dispatch({ type: 'START_RIDE' })}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700"
            >
              Start Ride
            </button>
          </div>
        );
      case 'ongoing':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ride in Progress</h3>
            {state.assignedDriver && <DriverCard driver={state.assignedDriver} />}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{state.currentRide?.pickupLocation}</span>
              </div>
              <div className="flex items-center">
                <Navigation className="h-4 w-4 mr-1" />
                <span>{state.currentRide?.dropLocation}</span>
              </div>
            </div>
            <button
              onClick={() => dispatch({ type: 'COMPLETE_RIDE' })}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
            >
              Complete Ride
            </button>
          </div>
        );
      case 'completed':
        return (
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold text-green-600">Ride Completed!</h3>
            <p>Thank you for riding with us.</p>
            <button
              onClick={() => {
                dispatch({ type: 'RESET_RIDE' });
                onClose();
              }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        <div className="relative bg-white rounded-lg w-full max-w-md p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}