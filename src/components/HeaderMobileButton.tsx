import React, { useState } from 'react';
import redirectTo from '../utils/RedirectTo';

interface Props {
    title: string;
    logo: string;
    url: string;
}

function HeaderMobileButton({ title, logo, url }: Props) {
    return (
        <div className="header-mobile-dropdown">
            <button className=' header-mobile-button flex flex-row items-center justify-center'>
                <img className='pr-2' src={logo} alt="#" /><p>{title}</p>
            </button>
        </div>
    );
}

export default HeaderMobileButton;
