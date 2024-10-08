import React, { useEffect, useContext, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import Logo from '../img/logo.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to="/">
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
      
        <div onClick={() => setIsOpen(!isOpen)} className="curser-pointer flex relative max-w-[50px]">
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute left-4 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
