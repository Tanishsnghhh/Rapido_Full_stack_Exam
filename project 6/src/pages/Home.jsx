import React from 'react';
import { useRide } from '../context/RideContext';
import { mockServices, mockDrivers } from '../data/mockData';
import { Map } from '../components/map/Map';
import { ServiceCard } from '../components/ServiceCard';
import { PaymentMethodSelector } from '../components/PaymentMethodSelector';
import { RideBookingModal } from '../components/RideBookingModal';
import { toast } from 'react-hot-toast';

export function Home() {
  const { state, dispatch } = useRide();
  const [selectedService, setSelectedService] = React.useState(null);
  const [showBookingModal, setShowBookingModal] = React.useState(false);

  // Mock nearby drivers for the map
  const driverMarkers = mockDrivers.map(driver => ({
    position: driver.location,
    icon: {
      url: driver.avatar,
      scaledSize: { width: 40, height: 40 }
    },
    title: driver.name
  }));

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleBookRide = () => {
    if (!selectedService) {
      toast.error('Please select a ride type');
      return;
    }
    dispatch({ type: 'START_BOOKING', payload: selectedService });
    setShowBookingModal(true);
  };

  return (
    <div className="max-w-lg mx-auto space-y-4">
      {/* Map Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <Map markers={driverMarkers} />
      </div>

      {/* Service Selection Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Select Ride Type</h2>
        <div className="space-y-3">
          {mockServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              selected={selectedService?.id === service.id}
              onSelect={handleServiceSelect}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleBookRide}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700"
      >
        Book Now
      </button>

      {showBookingModal && (
        <RideBookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
}