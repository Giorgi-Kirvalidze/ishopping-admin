import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
const Navbar = () => {
  return (
    <div className=" flex items-center gap-4 w-full flex-start  bg-black text-s  ">
      <Link to="/" className="text-white px-2">
        IShopping CP
      </Link>

      <ul className=" flex gap-4 navbar items-center  text-white">
        <li>
          <Link to="/11">მთავარი</Link>
        </li>
        <li className=" dropdown">
          <Link className="flex  items-center " to="/666">
            <span>დამატება</span>
            <IoMdArrowDropdown />
          </Link>

          <div className=" dropdown-content">
            <Link to="#">პროდუქტი</Link>
            <Link to="#">კატეგორია</Link>
            <Link to="#">ქვეკატეგორია</Link>
          </div>
        </li>

        <li className="flex items-center relative dropdown">
          <Link to="/7676" className="flex items-center">
            <span>სია</span>
            <IoMdArrowDropdown />
          </Link>

          <div className=" dropdown-content">
            <Link to="/users">მომხმარებლის სია</Link>
            <Link to="#">შეკვეთების სია</Link>
            <Link to="#">კატეგორიის სია</Link>
            <Link to="#">ქვეკატეგორიის სია</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
