import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { mockDrivers, mockPaymentMethods, mockServices, mockUser } from '../data/mockData';
import { ServiceCard } from '../components/ServiceCard';
import { PaymentMethodSelector } from '../components/PaymentMethodSelector';
import { RecentLocations } from '../components/RecentLocations';
import { useRide } from '../context/RideContext';
import { RideBookingModal } from '../components/RideBookingModal';
import { Map } from '../components/Map';

export function Home() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedService, setSelectedService] = useState(mockServices[0]);
  const [selectedPayment, setSelectedPayment] = useState(
    mockPaymentMethods.find((m) => m.isDefault) || mockPaymentMethods[0]
  );
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { dispatch } = useRide();

  const handleLocationSelect = (location) => {
    if (!pickup) {
      setPickup(location);
    } else {
      setDestination(location);
    }
  };

  const handleBookRide = () => {
    if (!pickup || !destination) {
      alert('Please enter pickup and destination locations');
      return;
    }

    dispatch({
      type: 'BOOK_RIDE',
      payload: {
        pickupLocation: pickup,
        dropLocation: destination,
        price: selectedService.basePrice,
        distance: 5.2,
        duration: 25,
        paymentMethod: selectedPayment.type,
      },
    });
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-4">
        <Map
          center={{ lat: 12.9716, lng: 77.5946 }}
          drivers={mockDrivers}
        />
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 -mt-8 relative z-10">
          <h1 className="text-2xl font-bold text-center mb-6">Book Your Ride</h1>
          
          <div className="space-y-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <RecentLocations
              locations={mockUser.recentLocations}
              onSelect={handleLocationSelect}
            />

            <div className="space-y-3 mt-6">
              <h3 className="font-semibold">Select Service</h3>
              {mockServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  selected={selectedService.id === service.id}
                  onSelect={setSelectedService}
                />
              ))}
            </div>

            <PaymentMethodSelector
              methods={mockPaymentMethods}
              selected={selectedPayment}
              onSelect={setSelectedPayment}
            />

            <button
              onClick={handleBookRide}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Book Now - ₹{selectedService.basePrice}
            </button>
          </div>
        </div>
      </div>

      {showBookingModal && (
        <RideBookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
}