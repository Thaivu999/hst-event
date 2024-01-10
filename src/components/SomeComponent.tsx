// SomeComponent.jsx or SomeComponent.tsx

import React from 'react';

import yourImage from '../img/image2.png'; 

const SomeComponent = () => {
  return (
    <div>
      <img src={yourImage} alt="Descriptive Alt Text" className='max-h-full w-full' />
      {/* Other component code */}
    </div>
  );
};

export default SomeComponent;
