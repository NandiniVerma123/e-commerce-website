import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import CartItem from '../components/CartItem';
import { FiTrash2 } from 'react-icons/fi';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };

 

  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  
  return (
    <div
      className={`w-full bg-white fixed top-0 h-full
      shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all 
      duration-300 z-20 px-4 lg:px-[35px]
      ${isOpen ? 'right-0' : '-right-full'}`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({cart.length})</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>

      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto'>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))
        ) : (
          <div className="text-center">Your cart is empty</div>
        )}
      </div>

      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className='cursor-pointer p-4 bg-red-500 text-white w-12 h-12
            flex justify-center items-center text-xl'
          >
            <FiTrash2 />
          </div>
        </div>
        <Link to='/' className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>View cart</Link>
        <button onClick={logout} className='mt-4 p-4 bg-red-600 text-white w-full font-medium text-center'>
          Log Out
        </button>
       
      </div>
    </div>
  );
};

export default Sidebar;
