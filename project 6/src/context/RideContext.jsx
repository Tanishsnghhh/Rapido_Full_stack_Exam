import React, { createContext, useContext, useReducer } from 'react';
import { mockDrivers } from '../data/mockData';

const RideContext = createContext(null);

const initialState = {
  bookingStep: null, // null | 'searching' | 'confirmed' | 'ongoing' | 'completed'
  selectedService: null,
  assignedDriver: null,
  currentRide: null
};

function rideReducer(state, action) {
  switch (action.type) {
    case 'START_BOOKING':
      return {
        ...state,
        bookingStep: 'searching',
        selectedService: action.payload
      };
    case 'ASSIGN_DRIVER':
      return {
        ...state,
        bookingStep: 'confirmed',
        assignedDriver: mockDrivers[0]
      };
    case 'START_RIDE':
      return {
        ...state,
        bookingStep: 'ongoing',
        currentRide: {
          driver: state.assignedDriver,
          service: state.selectedService,
          startTime: new Date()
        }
      };
    case 'COMPLETE_RIDE':
      return {
        ...state,
        bookingStep: 'completed'
      };
    case 'RESET_RIDE':
      return initialState;
    default:
      return state;
  }
}

export function RideProvider({ children }) {
  const [state, dispatch] = useReducer(rideReducer, initialState);

  return (
    <RideContext.Provider value={{ state, dispatch }}>
      {children}
    </RideContext.Provider>
  );
}

export function useRide() {
  const context = useContext(RideContext);
  if (!context) {
    throw new Error('useRide must be used within a RideProvider');
  }
  return context;
}