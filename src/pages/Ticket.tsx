import React from "react";
import ticketphoto from "../assets/ticketphoto.svg";
import kvitokplashka from "../assets/kvitokplashka.svg";

function Ticket() {
  return (
    <div className="mx-auto md:p-20 md:pt-0">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col mb-20 items-start space-y-8">
          <div className=" w-72 mt-5 md:w-full md:ml-0  md:max-w-md">
            <img
              className="md:-mx-20 w-full max-w-md"
              src={kvitokplashka}
              alt="kvitokplashka"
            />
          </div>

          <p className="ml-5 md:ml-0 mb-2 font-bold text-lg">
            Для отримання учнівського квитка
          </p>
          <ul className=" ml-10 mr-1 md:mr-0 md:ml-0 list-decimal list-inside text-lg font-bold mb-20">
            <li>
              Заповніть анкету за&nbsp;

              <a
                className="text-cyan-600 hover:text-cyan-300 underline underline-offset-4"
                href="https://cabinet.dniprorada.gov.ua"
                target="_blank"
                rel="noopener noreferrer"
              >
                посиланням
              </a>
              &nbsp; або перейдіть за посиланням для <br />
              отримання паперового варіанту анкети.
            </li>
            <li>
              Очікуйте виготовлення учнівського квитка протягом 21 календарних
              дня.
            </li>
            <li>Заберіть учнівський квиток у вашій школі!</li>
          </ul>
        </div>

        <div className="flex flex-col md:mt-0">
          <img
            className="md:w-full md:max-w-2xl"
            src={ticketphoto}
            alt="ticketphoto"
          />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
