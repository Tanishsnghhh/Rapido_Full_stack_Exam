import React, { createContext, useContext, useReducer } from 'react';
import { mockDrivers } from '../data/mockData';

const initialState = {
  currentRide: null,
  assignedDriver: null,
  bookingStep: 'initial',
};

const RideContext = createContext(null);

function rideReducer(state, action) {
  switch (action.type) {
    case 'BOOK_RIDE':
      return {
        ...state,
        currentRide: {
          id: Math.random().toString(36).substr(2, 9),
          ...action.payload,
          status: 'pending',
        },
        bookingStep: 'searching',
      };
    case 'ASSIGN_DRIVER':
      const randomDriver = mockDrivers[Math.floor(Math.random() * mockDrivers.length)];
      return {
        ...state,
        assignedDriver: randomDriver,
        currentRide: state.currentRide ? {
          ...state.currentRide,
          driver: randomDriver,
          status: 'confirmed',
        } : null,
        bookingStep: 'confirmed',
      };
    case 'START_RIDE':
      return {
        ...state,
        currentRide: state.currentRide ? {
          ...state.currentRide,
          status: 'ongoing',
        } : null,
        bookingStep: 'ongoing',
      };
    case 'COMPLETE_RIDE':
      return {
        ...state,
        currentRide: state.currentRide ? {
          ...state.currentRide,
          status: 'completed',
        } : null,
        bookingStep: 'completed',
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