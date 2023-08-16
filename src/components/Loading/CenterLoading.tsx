import React from 'react';

function CenterLoading() {
  return (
    <div className='h-screen w-screen bg-white flex items-center justify-center'>
      <p className='text-blue-600 animate-pulse text-2xl'>Loading</p>
    </div>
  );
}

export default CenterLoading;