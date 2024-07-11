import React from 'react';
import MapComponent from '../components/mapComponent';
import mapPlashka from "../assets/mapplashka.svg";
import mapPointer from "../assets/map-pointer.svg"
function Map() {
  return (
    <div>
      <div className=" mt-10 mb-10 w-80 md:w-auto">
        <img className="w-full max-w-md" src={mapPlashka} alt="mapplashka" />
      </div>
      <div className='map-wrapper'>
        <div className='mb-4 flex flex-row justify-center items-center text-center' style={{ color: '#B5B5B5' }}>
          <img className="pr-3" src={mapPointer} alt="#" />
          <p>Натисніть на один з маркерів для контактої інформації школи на тій локації:</p>
        </div>
        <div className="map">
          <MapComponent></MapComponent>
        </div>
      </div>
      <div className='mt-24'></div>
    </div>
  );
}

export default Map;