import React from "react";
import schoolphoto from "../assets/schoolphoto.svg";
import plashka from "../assets/plashka.svg";

function School() {
  const dytynaClick = () => {
    window.location.href = "https://cabinet.dniprorada.gov.ua/";
  };
  return (
    <div className="mx-auto md:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col ">
          <div className="md:-mx-20">
            <img className="w-72 mt-5 mb-5 md:w-full md:mt-0 md:max-w-md" src={plashka} alt="plashka" />
          </div>

          <p className="ml-5 mr-1 md:mr-0 md:ml-0 mb-4 font-bold text-lg">
            Список необхідних документів для зарахування дитини:
          </p>
          <ul className="ml-10 md:ml-0 list-decimal list-inside text-lg font-bold mb-4">
            <li>Паспорт чи інший документ, що засвідчує особу заявника</li>
            <li>
              Копія та оригінал свідоцтва про народження дитини або документ,{" "}
              <br />
              що засвідчує особу
            </li>
            <li>Копія чи оригінал медичної довідки за формою №086-1/о</li>
            <li>Документ, що підтверджує місце проживання дитини чи батьків</li>
            <li>Довідка ВПО (за наявності)</li>
            <li>Документ про освіту або особова справа учня (за наявності)</li>
          </ul>
        </div>

        <div className="flex flex-col ml-3 mr-3 md:ml-0 md:mr-0 space-y-10 mt-30 md:mt-0 md:ml-8">
          <img
            className="w-full max-w-md"
            src={schoolphoto}
            alt="schoolphoto"
          />
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-7 md:mb-0 ">
        <button
          className="bg-white hover:bg-blue-500 hover:text-white text-base text-cyan-800 font-bold shadow-md shadow-gray-500 py-1 px-4 md:py-2 md:px-12 md:text-2xl rounded"
          onClick={dytynaClick}
        >
          Зарахувати дитину
        </button>
      </div>
    </div>
  );
}

export default School;
