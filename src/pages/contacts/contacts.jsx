import React, { useState } from "react";
import contactBg from "../../assets/contact-bg.png";
import { NavLink } from "react-router-dom";
import Header from "../../components/header";
import { GoArrowRight } from "react-icons/go";
import ContactModal from "../../components/contactModal";

const Contacts = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };
  const closeModal = () => {
    setOpen(!open);
  };

  return (
    <section> 
      <Header />
      <div className="container flex flex-col mx-auto px-3 pb-3">
        <div className="w-full flex md:flex-row flex-col md:items-stretch items-center mx-auto md:h-[550px] rounded-[28px]">
          {" "}
          <img
            className="md:w-auto w-full object-left-top md:rounded-bl-[28px] md:rounded-tr-none rounded-tl-[28px] rounded-tr-[28px]"
            src={contactBg}
            alt="picture"
          />
          <article className="md:w-[65%] md:h-auto sm:pt-10 sm:pl-10 pt-3 pl-3 bg-white md:rounded-tr-[28px] md:rounded-br-[28px] md:rounded-bl-none rounded-bl-[28px] rounded-br-[28px] w-full overflow-clip">
            <div>
              <h3 className="font-bold text-[24px] mb-[30px]">
                Клиентская служба
              </h3>
              <p className="mb-[15px] text-[#4d4d4d]">+998 71 201 11 10</p>
              <p className="mb-[15px] text-[#4d4d4d]">
                г. Ташкент, ул. Лабзак, дом 52, ArzonTop LLC
              </p>
              <p className="text-[#4d4d4d]">info@arzontop.uz</p>
              <div className="relative lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[400px] sm:w-[350px] sm:h-[350px] w-[250px] h-[250px] flex items-center justify-center ml-auto lg:mt-12 md:-mr-10 md:mt-16 sm:-mr-10 sm:-mb-[100px] mr-1 -mb-[88px]">
                <div className="pulse-ring lg:w-[420px] lg:h-[420px] md:w-[360px] md:h-[360px] sm:w-[340px] sm:h-[340px] w-[160px] h-[160px]"></div>
                <div className="pulse-ring lg:w-[400px] lg:h-[400px] md:w-[340px] md:h-[340px] sm:w-[320px] sm:h-[320px] w-[150px] h-[150px]"></div>
                <div className="pulse-ring lg:w-[380px] lg:h-[380px] md:w-[320px] md:h-[320px] sm:w-[300px] sm:h-[300px] w-[140px] h-[140px]"></div>
                <div className="pulse-ring lg:w-[360px] lg:h-[360px] md:w-[300px] md:h-[300px] sm:w-[280px] sm:h-[280px] w-[130px] h-[130px]"></div>
                <div className="flex items-center justify-between absolute z-[2] bg-black text-white rounded-[50%] lg:w-[340px] lg:h-[340px] md:w-[280px] md:h-[280px] sm:w-[260px] sm:h-[260px] w-[250px] h-[250px] p-2">
                  <h3 className="md:text-[30px] md:leading-[38px] text-[26px] leading-[33px]">
                    Для <br /> инвесторов
                  </h3>
                  <NavLink
                    onClick={openModal}
                    className="flex items-center justify-center lg:w-[140px] lg:h-[140px] md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] w-[70px] h-[70px] bg-[#caeb1e] rounded-full hover:opacity-90"
                    to={"#"}
                  >
                    <GoArrowRight className="text-black md:text-[60px] text-[50px] font-normal -rotate-45" />
                  </NavLink>
                </div>
              </div>
            </div>
          </article>
        </div>
        {open && <ContactModal closeModal={closeModal} />}
      </div>
    </section>
  );
};

export default Contacts;
