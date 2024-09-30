import React from "react";
import Header from "../../components/header";
const cardData = [
  {
    id: 1,
    imageSrc: "../../public/2-1.png",
    cardText: "Скачайте приложение и пройдите регистрацию",
  },
  {
    id: 2,
    imageSrc: "../../public/2-2.png",
    cardText:
      "Предоставьте доступ к локации и ищите лекарства в ближайших аптеках",
  },
  {
    id: 3,
    imageSrc: "../../public/2-3.png",
    cardText: "Выбирайте подходящие аптеки для приобретения лекарств",
  },
  {
    id: 4,
    imageSrc: "../../public/2-4.png",
    cardText: "Сортируйте лекарства по нужным критериям",
  },
  {
    id: 5,
    imageSrc: "../../public/2-5.png",
    cardText: "Просматривайте лекарства и данные нужных аптек",
  },
  {
    id: 6,
    imageSrc: "../../public/2-6.png",
    cardText: "Находите нужные вам лекарства в приложении",
  },
  {
    id: 7,
    imageSrc: "../../public/2-7.png",
    cardText: "Ищите нужные лекарства по категориям в приложении",
  },
  {
    id: 8,
    imageSrc: "../../public/2-8.png",
    cardText: "Просматривайте лекарства и данные нужных аптек",
  },
];

const Usage = () => {
  return (
    <section className="usage">
      <Header />
      <main className="pb-3">
        <div className="card-pr container flex lg:justify-between justify-center flex-wrap mx-auto px-2">
          {cardData && 
            cardData.map((item, index) => (
              <div key={index} className="lg:w-[24%] md:w-[33%] sm:w-[49%] w-[90%] overflow-y-hidden flex flex-col items-center gap-y-4 rounded-[28px] bg-white px-3 mb-4">
                <img className="w-[90%]" src={item?.imageSrc} alt="Phone" />
                <article className="flex items-center justify-between gap-x-3">
                  <span className="flex shrink-0 items-center justify-center w-[38px] h-[38px] bg-black rounded-full font-bold text-[22px] text-[#caeb1e]">
                    {item?.id}
                  </span>
                  <p className="font-medium text-[14px]">{item?.cardText}</p>
                </article>
              </div>
            ))}
        </div>
      </main>
    </section>
  );
};

export default Usage;
