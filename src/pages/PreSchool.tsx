import React from 'react';
import preschoolplashka from "../assets/preschoolplashka.svg"
import preschoolphoto from "../assets/preschoolphoto.svg"

function PreSchool() {
  return (
    <div className="mx-auto md:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col ">

          <div className="md:-mx-20 md:mb-20">
            <img className="w-72 mt-5 mb-5 md:w-full md:ml-0 md:mt-0 md:max-w-md" src={preschoolplashka} alt="preschoolplashka" />
          </div>

          <p className="ml-10 md:ml-0 mb-4 font-bold text-lg">Для зарахування у садочок:</p>
          <ul className="ml-5 md:ml-0 list-decimal list-inside text-lg font-bold mb-4">
            <li>Заява батьків або осіб, які їх замінюють; </li>
            <li>Паспорт чи інший документ, що засвідчує особу заявника;</li>
            <li>	Медична довідка про стан здоров'я   дитини   з  висновком  лікаря, що <br />
              дитина  може відвідувати  заклад дошкільної освіти;</li>
            <li>Копія та оригінал свідоцтва про народження дитини або документ, що <br />
              засвідчує особу;</li>
          </ul>

        </div>

        <div className="flex flex-col space-y-10 mt-30 md:mt-0 md:ml-8">
          <img className="ml-3 mr-3 md:ml-0 md:mr-0 mt-10 md:mt-0 mb-10 md:mb-0 md:w-full md:max-w-md" src={preschoolphoto} alt="preschoolphoto" />
        </div>

      </div>

    </div>
  );
}

export default PreSchool;