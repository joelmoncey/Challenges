import React from 'react';

// We pass a 'size' prop to make the loader reusable (e.g., small for buttons, large for pages)
// We pass a 'fullScreen' prop to optionally center it in the middle of the page
const Loader = ({ size = 'md', fullScreen = false }) => {
  
  // Map our size prop to Tailwind dimensions
  const sizeClasses = {
    sm: 'h-5 w-5 border-2',
    md: 'h-10 w-10 border-4',
    lg: 'h-16 w-16 border-4',
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* 
        The spinner itself. 
        border-t-transparent creates the spinning "gap".
        animate-spin makes it rotate.
      */}
      <div 
        className={`
          animate-spin rounded-full 
          border-blue-600 border-t-transparent 
          ${sizeClasses[size]}
        `}
      ></div>
      
      {/* Optional: Show text only if it's a large/page loader */}
      {size === 'lg' && (
        <span className="text-sm font-medium text-gray-500 animate-pulse">
          Loading...
        </span>
      )}
    </div>
  );

  // If fullScreen is true, wrap it in a flex container that takes up the whole screen
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
        {spinner}
      </div>
    );
  }

  // Otherwise, just return the inline spinner
  return spinner;
};

export default Loader;