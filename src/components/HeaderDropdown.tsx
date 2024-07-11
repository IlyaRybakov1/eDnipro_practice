import React, { useState } from 'react';
import '../styles/App.css';
import redirectTo from '../utils/RedirectTo';
import { Item } from './Header';
interface Props {
    items: Item[];
    title: string;
    logo: string;
}
function HeaderDropdown({ items, title, logo }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div
            className={` ${isMenuOpen ? 'rounded-t-md' : 'rounded-md'} cursor-pointer h-full hidden md:flex flex-row justify-center items-center header-button ${isHovered ? 'hovered' : 'unhovered'}`}
            style={{ width: '158px', marginLeft: '3%', marginRight: '3%', backgroundColor: isMenuOpen ? '#7096DC' : '', }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleMenu}
        >
            <img src={logo} alt="Logo" style={{ marginRight: '7%' }} className={`header-button__img  ${isHovered ? 'hovered' : 'unhovered'}`} />
            <p>{title}</p>
            {isMenuOpen && (
                <div className="dropdown-menu">
                    {items.map((item) => (
                        <div onClick={handleMouseLeave} key={item.id} className="dropdown-item">
                            <div onClick={() => { redirectTo(item.url) }}>{item.title}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HeaderDropdown;
