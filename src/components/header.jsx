import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import { MdAddBusiness } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiMenuFoldFill } from "react-icons/ri";
import VerticalMenu from "./verticalMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="py-5 relative">
      <div className="container flex items-center justify-between mx-auto bg-transparent px-2 py-5">
        <NavLink
          to={"/"}
          className="bg-black px-4 py-3 rounded-[10px] hover:opacity-95 active:opacity-90"
        >
          <img src={Logo} alt="arzontop" width={100} height={20} />
        </NavLink>
        <nav className="hidden md:block">
          <ul className="flex">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `rounded-xl rounded-r-none bg-[#F5F5F5] py-3 px-5 border border-transparent text-center text-[13px] transition-all duration-[0.3s] shadow-md hover:shadow-lg hover:bg-white focus:bg-white focus:shadow-none active:bg-white active:shadow-none ${
                    isActive
                      ? "bg-white shadow-lg font-medium"
                      : " bg-[#f5f5f5] font-regular"
                  }`
                }
              >
                Приложение
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/usage"}
                className={({ isActive }) =>
                  `rounded-none bg-[#F5F5F5] py-3 px-5 border border-transparent text-center text-[13px] transition-all duration-[0.3s] shadow-md hover:shadow-lg hover:bg-white focus:bg-white focus:shadow-none active:bg-white active:shadow-none ${
                    isActive
                      ? "bg-white shadow-lg font-medium"
                      : " bg-[#f5f5f5] font-regular"
                  }`
                }
              >
                Как пользоваться
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contacts"}
                className={({ isActive }) =>
                  `rounded-xl rounded-l-none bg-[#F5F5F5] py-3 px-5 border border-transparent text-center text-[13px] transition-all duration-[0.3s] shadow-md hover:shadow-lg hover:bg-white focus:bg-white focus:shadow-none active:bg-white active:shadow-none ${
                    isActive
                      ? "bg-white shadow-lg font-medium"
                      : " bg-[#f5f5f5] font-regular"
                  }`
                }
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink
          to={"#"}
          className="hidden md:flex items-center bg-[#caeb1e] px-3 py-2 border border-solid border-black rounded-[13px] hover:opacity-95 active:opacity-90"
        >
          <MdAddBusiness className="mr-2 text-lg" /> Регистрация для бизнеса
        </NavLink>
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <RiMenuFoldFill className="text-4xl" />
        </button>
        {isOpen && <VerticalMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};

export default Header;
