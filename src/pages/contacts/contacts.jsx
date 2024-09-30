import React from "react";
import ContactBg from "../../../public/contact-bg.png";
import Invest from "../../../public/invest.png";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Header from "../../components/header";

const Contacts = () => {
  return (
    <section>
      <Header />
      <div className="container flex md:flex-row flex-col rounded-[28px] mx-auto h-[550px] px-3">
        <img className="object-left-top md:rounded-bl-[28px] md:rounded-tr-none rounded-tl-[28px] rounded-tr-[28px]" src={ContactBg} alt="picture" />
        <article className="md:w-[65%] pt-10 pl-10 bg-white md:rounded-tr-[28px] md:rounded-br-[28px] md:rounded-bl-none rounded-bl-[28px] rounded-br-[28px] w-full overflow-clip">
          <div>
            <h3 className="font-bold text-[24px] mb-[30px]">Клиентская служба</h3>
            <p className="mb-[15px] text-[#4d4d4d]">+998 71 201 11 10</p>
            <p className="mb-[15px] text-[#4d4d4d]">г. Ташкент, ул. Лабзак, дом 52, ArzonTop LLC</p>
            <p className="text-[#4d4d4d]">info@arzontop.uz</p>
            <img className="w-[450px] ml-auto lg:mt-12 md:-mr-10 md:mt-28 sm:-mr-20 sm:mb-[-150px] -mr-14 mb-[-70px]" src={Invest} alt="invest" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contacts;
