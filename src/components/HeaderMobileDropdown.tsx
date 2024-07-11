import React, { useState } from 'react';
import redirectTo from '../utils/RedirectTo';
import { Item } from './Header';

interface Props {
    items: Item[];
    title: string;
    logo: string;
}

function HeaderMobileDropdown({ items, title, logo }: Props) {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);

    const toggleSubMenu = () => {
        if (subMenuOpen) {
            setSubMenuOpen(false);
            setMenuHeight(0);
        } else {
            setSubMenuOpen(true);
            setMenuHeight(items.length * 44); // Высота на основе количества элементов
        }
    };

    return (
        <div className="header-mobile-dropdown">
            <button className={` ${subMenuOpen ? 'submenu-button-active' : ''} header-mobile-button flex flex-row items-center justify-center`} onClick={toggleSubMenu}>
                <img className={`pr-2 ${subMenuOpen ? 'header-mobile-logo' : ''}`} src={logo} alt="#" /><p>{title}</p>
            </button>
            <div className="submenu" style={{ height: `${menuHeight}px` }}>
                {items.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => redirectTo(item.url)}
                        style={{
                            transform: subMenuOpen ? 'translateY(0)' : `translateY(-${index * 50}px)`,
                            transition: `transform 0.3s ${index * 0.01}s ease-out`,
                        }}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default HeaderMobileDropdown;
