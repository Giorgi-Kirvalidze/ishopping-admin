import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  return (
    <div className=" flex items-center gap-4 w-full flex-start p-2 bg-black  ">
      <Link to="/" className="text-white">
        IShopping CP
      </Link>

      <ul className=" flex gap-4 navbar items-center  text-white">
        <li>
          <Link to="/">მთავარი</Link>
        </li>
        <li
          className="relative"
          onClick={() => setDropdownActive((prevState) => !prevState)}
          onBlur={() => setDropdownActive((prevState) => !prevState)}
        >
          <Link className="flex  items-center" to="/">
            <span>დამატება</span>
            <IoMdArrowDropdown />
          </Link>
          {dropdownActive && (
            <div className="flex flex-col  absolute border-2 border-solid border-gray-200 rounded-md text-black  p-1 mt-2  ">
              <Link to="#">პროდუქტი</Link>
              <Link to="#">კატეგორია</Link>
              <Link to="#">ქვეკატეგორია</Link>
            </div>
          )}
        </li>
        <li className="flex items-center">
          <Link to="/">სია</Link>
          <IoMdArrowDropdown />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
