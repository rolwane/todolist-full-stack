import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import AppContext from '../../context/AppContext';

function Header() {
  const name = useContext(AppContext);

  return (
    <header className="w-full p-5 border-b-[1px] border-slate-200 border-solid flex justify-between">

      <div className="flex items-center gap-2">
        <FaUserCircle className="text-3xl text-slate-700" />
        <div className="flex flex-col">
          <span className="text-lg font-medium text-slate-800">{name.name}</span>
          <span className="text-xs mt-[-5px] text-slate-500">rolwane@gmail.com</span>
        </div>
      </div>

      <button type="button">
        <FiLogOut className="text-2xl" />
      </button>

    </header>
  );
}

export default Header;
