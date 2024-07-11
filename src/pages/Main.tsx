import React from 'react';
import photo9 from "../assets/photo9.svg";
import photo10 from "../assets/photo10.svg";
import photosprava from "../assets/photosprava.svg";
const maybutneClick = () => {
  window.location.href = 'https://osvita.dniprorada.gov.ua/';
};
function Main() {

  return (
    <div className="main middle-page container mx-auto p-20 font-bold">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col space-y-12">
          <img className="w-full max-w-md rounded" src={photo10} alt="photo10" />
          <img className="w-full max-w-md rounded" src={photo9} alt="photo9" />
          <p className=" text-center text-3xl mt-8">
            Наша мета - розвиток та <br />самореалізація кожної <br />дитини!
          </p>
        </div>
        <div className="flex flex-col space-y-10 mt-30 md:mt-0 md:ml-8">
          <p className="text-center text-3xl mb-8">
            Майбутнє нашої молоді <br />у наших з вами руках!
          </p>
          <img className="w-full max-w-md" src={photosprava} alt="photosprava" />
        </div>
      </div>
      <div className="flex justify-center mt-8 ">
        <button className="bg-white hover:bg-blue-500 hover:text-white text-cyan-800 shadow-md shadow-gray-500 py-2 px-12 text-2xl rounded font-bold" onClick={maybutneClick}>
          Обирай своє майбутнє
        </button>
      </div>
    </div>
  );
}

export default Main;
