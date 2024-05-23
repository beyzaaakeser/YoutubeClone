import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FaBell } from 'react-icons/fa';
import { IoIosVideocam } from 'react-icons/io';
import { MdVideoLibrary } from 'react-icons/md';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link className="flex items-center gap-2" to="/">
        <img className="w-[50px]" src="/public/youtube2.png" alt="logo" />
        <h1 className="text-2xl font-mono max-sm:hidden">Youtube</h1>
      </Link>

      <form className="flex border border-gray-400 rounded-[20px] overflow-hidden group">
        <input
          type="text"
          placeholder="Search..."
          className=" bg-black text-white py-2 px-5 outline-none group-hover:border-blue-500 group-hover:border border border-transparent rounded-s-[20px] focus:border-blue-500"
        />
        <button className="px-4 text-2xl bg-zinc-800">
          <CiSearch />
        </button>
      </form>

      <div className="flex gap-2 items-center">
        <FaBell />
        <IoIosVideocam />
        <MdVideoLibrary />
      </div>
    </header>
  );
};

export default Header;
