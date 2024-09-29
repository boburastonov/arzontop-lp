import React from "react";
import { MdAddBusiness } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const VerticalMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`flex items-center justify-end absolute z-50 inset-0 bg-[#00000073] bg-opacity-50 transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div className="md:hidden bg-black w-full sm:w-[50%] absolute right-0 top-0 h-[100vh] flex flex-col items-center justify-center transition-all duration-[0.3s]">
        <button onClick={() => setIsOpen(false)}>
          <IoClose className="text-4xl fixed top-2 right-2 text-white" />
        </button>
        <nav className="block">
          <ul className="flex flex-col items-center gap-6">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `rounded-xl bg-[#F5F5F5] py-3 px-5 border border-transparent text-center text-[13px] transition-all duration-[0.3s] shadow-md hover:shadow-lg hover:bg-white focus:bg-white focus:shadow-none active:bg-white active:shadow-none ${
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
                  `rounded-xl bg-[#F5F5F5] py-3 px-5 border border-transparent text-center text-[13px] transition-all duration-[0.3s] shadow-md hover:shadow-lg hover:bg-white focus:bg-white focus:shadow-none active:bg-white active:shadow-none ${
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
                  `rounded-xl bg-[#F5F5F5] py-3 px-5 border border-transparent text-center text-[13px] transition-all duration-[0.3s] shadow-md hover:shadow-lg hover:bg-white focus:bg-white focus:shadow-none active:bg-white active:shadow-none ${
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
          className="flex md:hidden md:m-0 mt-4 items-center bg-[#caeb1e] px-3 py-2 border border-solid border-black rounded-[13px] hover:opacity-95 active:opacity-90"
        >
          <MdAddBusiness className="mr-2 text-lg" /> Регистрация для бизнеса
        </NavLink>
      </div>
    </div>
  );
};

export default VerticalMenu;
