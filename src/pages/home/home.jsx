import React from "react";
import Header from "../../components/header";
import QrCode from "../../assets/QR&Code.png";
import LeftImg from "../../assets/1-left.png";
import RightImg from "../../assets/1-right.png";
import MainImg from "../../assets/phones.png";

const Home = () => {
  return (
    <section className="h-[100vh] lg:overflow-hidden">
      <Header />
      <main>
        <div className="container flex mx-auto lg:flex-row items-center flex-col-reverse px-3 lg:pb-0 pb-3">
          <div className="flex lg:items-start lg:m-0 md:-mt-20 sm:-mt-16 -mt-8 flex-col content-evenly items-center">
            <img className="rounded-[18px] mb-7" src={QrCode} alt="qr code" />
            <p className="text-[14px] font-semibold lg:text-left text-center">
              Отсканируй QR-код, чтобы <br /> скачать приложение на телефон
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex">
              <img className="mt-4" src={LeftImg} alt="image" />
              <p className="text-base font-semibold text-center mx-3">
                Поможем найти лекарства <br /> быстро и дёшево
              </p>
              <img className="mt-2" src={RightImg} alt="image" />
            </div>
            <img className="lg:-mt-[130px] md:-mt-20 sm:-mt-14 -mt-6 -mr-5" src={MainImg} alt="phones" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
