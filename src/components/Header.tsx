import React, { useState, useEffect } from 'react';
import HeaderLogo from '../assets/header-logo.svg';
import School from '../assets/icon-school.svg';
import PreSchool from '../assets/icon-preschool.svg';
import Culture from '../assets/icon-culture.svg';
import Sport from '../assets/icon-sport.svg';
import '../styles/Header.css';
import HeaderDropdown from './HeaderDropdown';
import HeaderButton from './HeaderButton';
import BurgerIcon from '../assets/burger-icon.svg';
import CloseIcon from '../assets/close-icon.svg';
import redirectTo from '../utils/RedirectTo';
import HeaderMobileDropdown from './HeaderMobileDropdown';
import HeaderMobileButton from './HeaderMobileButton';

export interface Item {
    id: number;
    title: string;
    url: string;
}

const school: Item[] = [
    { id: 1, title: "Зарахування до школи", url: "school" },
    { id: 2, title: "Заклади освіти", url: "map" },
    { id: 3, title: "Учнівський квиток", url: "ticket" },
    { id: 4, title: "Харчування", url: "https://cabinet.dniprorada.gov.ua/" },
];

const preSchool: Item[] = [
    { id: 1, title: "Зарахування до садочка", url: "preSchool" },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuClosing, setMenuClosing] = useState(false);
    const [overlayActive, setOverlayActive] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState<number | null>(null);

    useEffect(() => {
        if (!menuOpen) {
            setSubMenuOpen(null);
        }
    }, [menuOpen]);

    const toggleSubMenu = (index: number) => {
        if (subMenuOpen === index) {
            setSubMenuOpen(null);
        } else {
            setSubMenuOpen(index);
        }
    };

    const toggleMenu = () => {
        if (menuOpen) {
            setMenuClosing(true);
            setOverlayActive(false);
            setTimeout(() => {
                setMenuOpen(false);
                setMenuClosing(false);
            }, 500);
        } else {
            setMenuOpen(true);
            setTimeout(() => {
                setOverlayActive(true);
            }, 0);
        }
    };

    return (
        <header className='w-full header'>
            <div className="header-top flex flex-row justify-between items-center md:h-2/3">
                <img onClick={() => redirectTo("/")} src={HeaderLogo} alt='#' className="header__logo w-28 md:w-36 h-12 md:h-34 cursor-pointer" />
                <div className="header__title bold-font text-base md:text-2xl">Заклади Освіти</div>
                <div className='md:invisible md:w-32 cursor-pointer'>
                    <img onClick={toggleMenu} src={BurgerIcon} alt='#' />
                </div>
            </div>
            <nav className="header-bottom md:h-1/3 flex flex-row justify-between text-1xl" style={{ backgroundColor: "#DCE8FF" }}>
                <HeaderDropdown items={school} title="Школа" logo={School}></HeaderDropdown>
                <HeaderDropdown items={preSchool} title="Садочок" logo={PreSchool}></HeaderDropdown>
                <HeaderButton title="Культура" logo={Culture} url='#'></HeaderButton>
                <HeaderButton title="Спорт" logo={Sport} url='#'></HeaderButton>
            </nav>
            {menuOpen && (
                <div className="modal-menu">
                    <div className={`menu-content font-bold ${menuClosing ? 'closing' : ''}`}>
                        <img src={CloseIcon} alt="Close" className="close-icon w-36 h-12" onClick={toggleMenu} />
                        <HeaderMobileDropdown items={school} title="Школа" logo={School} />
                        <HeaderMobileDropdown items={preSchool} title="Садочок" logo={PreSchool} />
                        <HeaderMobileButton title="Культура" logo={Culture} url='#'></HeaderMobileButton>
                        <HeaderMobileButton title="Спорт" logo={Sport} url='#'></HeaderMobileButton>
                    </div>
                    <div className={`overlay ${overlayActive ? 'active' : ''}`}></div>
                </div>
            )}
        </header>
    );
}

export default Header;