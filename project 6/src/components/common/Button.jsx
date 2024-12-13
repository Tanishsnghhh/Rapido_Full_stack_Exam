import React from 'react';

export function Button({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'border-transparent text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
    secondary: 'border-transparent text-purple-600 bg-purple-50 hover:bg-purple-100',
    outline: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}