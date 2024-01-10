// Menu.tsx
import React from 'react';

interface MenuProps {
  isOpen: boolean; // Trạng thái để xác định menu có đang mở hay không
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-white shadow-md`}>
      {/* Các chức năng của menu ở đây */}
      <a href="/link1" className="block p-4 text-gray-700">Link 1</a>
      <a href="/link2" className="block p-4 text-gray-700">Link 2</a>
      <a href="/link3" className="block p-4 text-gray-700">Link 3</a>
      {/* Thêm các links hoặc components khác theo ý bạn */}
    </div>
  );
};

export default Menu;
