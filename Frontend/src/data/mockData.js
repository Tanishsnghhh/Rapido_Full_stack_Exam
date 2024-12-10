export const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop',
  wallet: 500,
  recentLocations: ['Central Mall', 'Tech Park', 'Metro Station', 'Airport']
};

export const mockDrivers = [
  {
    id: '1',
    name: 'Mike Johnson',
    vehicleNumber: 'XY 12 AB 3456',
    rating: 4.8,
    location: { lat: 12.9716, lng: 77.5946 },
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop',
    phone: '+1234567891'
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    vehicleNumber: 'XY 34 CD 7890',
    rating: 4.9,
    location: { lat: 12.9726, lng: 77.5936 },
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    phone: '+1234567892'
  }
];

export const mockServices = [
  {
    id: '1',
    name: 'Bike',
    icon: '🏍️',
    description: 'Fast and affordable',
    basePrice: 20
  },
  {
    id: '2',
    name: 'Auto',
    icon: '🛺',
    description: 'Comfortable for 3',
    basePrice: 30
  },
  {
    id: '3',
    name: 'Car',
    icon: '🚗',
    description: 'Premium comfort',
    basePrice: 50
  }
];

export const mockPaymentMethods = [
  {
    id: '1',
    type: 'wallet',
    name: 'Wallet',
    icon: '💰',
    isDefault: true
  },
  {
    id: '2',
    type: 'upi',
    name: 'UPI',
    icon: '📱'
  },
  {
    id: '3',
    type: 'card',
    name: 'Credit Card',
    icon: '💳'
  },
  {
    id: '4',
    type: 'cash',
    name: 'Cash',
    icon: '💵'
  }
];

export const mockRides = [
  {
    id: '1',
    pickupLocation: 'MG Road Metro Station',
    dropLocation: 'Indiranagar',
    price: 150,
    distance: 5.2,
    duration: 25,
    status: 'completed',
    driver: mockDrivers[0],
    paymentMethod: 'wallet'
  },
  {
    id: '2',
    pickupLocation: 'Koramangala',
    dropLocation: 'Whitefield',
    price: 300,
    distance: 12.5,
    duration: 45,
    status: 'ongoing',
    driver: mockDrivers[1],
    paymentMethod: 'upi'
  }
];