import React, { useState } from 'react';
import Header from './components/Header'
import Body from './components/Body'
// import IconButton from './components/IconButton';
// import Menu from './components/Menu';
// import Navbar from './components/Navbar'


const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='max-2xl:'>
        <Header />
        <Body />
    </div>
    </>
    // <div className="relative">
    //   <IconButton toggle={toggleMenu} />
    //   <Menu isOpen={isOpen} />
    //  <Navbar />
    // </div>
  );
};

export default App;
