import React from 'react';
import '../styles/App.css';
import FooterLogo from '../assets/footer-logo.svg';
import DniproLogo from '../assets/dnipro-logo.svg';
import LogoFacebook from '../assets/logo-facebook.svg';
import LogoInstagram from '../assets/logo-instagram.svg';
import LogoTelegram from '../assets/logo-telegram.svg';
import redirectTo from '../utils/RedirectTo';

function Footer() {
  return (
    <footer className='footer w-full bg-blue-300 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm 2xl:text-base font-bold'>
      <div className="footer-logos w-52 md:w-60 flex flex-row justify-between items-center lg:w-72">
        <img src={FooterLogo} alt='#' />
        <div className="footer-title ">КП "єОсвіта" © 2024 — 202X</div>
      </div>
      <div className="footer-contacts flex flex-row justify-between  w-60 md:w-72 lg:w-96 xl:w-4/12">
        <p className='hidden lg:block'>Ми на зв’язку:</p>
        <p>+38 (ххх) ххх-хх-хх</p>
        <p>+38 (ххх) ххх-хх-хх</p>
      </div>
      <div className="footer-social flex flex-row justify-between  w-32">
        <img className="cursor-pointer" src={LogoInstagram} alt='#' onClick={() => redirectTo("#")} />
        <img className="cursor-pointer" src={LogoFacebook} alt='#' onClick={() => redirectTo("#")} />
        <img className="cursor-pointer" src={LogoTelegram} alt='#' onClick={() => redirectTo("#")} />
      </div>
    </footer>
  );
}

export default Footer;