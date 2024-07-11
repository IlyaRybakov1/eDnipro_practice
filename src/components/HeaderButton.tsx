import React, { useState } from 'react';
import redirectTo from '../utils/RedirectTo';

interface Props {
    title: string;
    logo: string;
    url: string;
}

function HeaderButton({ title, logo, url }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`rounded-md cursor-pointer h-full hidden md:flex flex-row justify-center items-center header-button ${isHovered ? 'hovered' : 'unhovered'}`}
            style={{ width: '158px', marginLeft: '3%', marginRight: '3%' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => redirectTo(url)}
        >
            <img src={logo} alt="Logo" style={{ marginRight: '7%' }} className={`header-button__img ${isHovered ? 'hovered' : 'unhovered'}`} />
            <p>{title}</p>
        </div>
    );
}

export default HeaderButton;
