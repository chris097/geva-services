import React, { useState } from 'react';
import EmailIcon from '../../public/svgs/EmailIcon';
import PhoneIcon from '../../public/svgs/PhoneIcon';
import ClockIcon from '../../public/svgs/ClockIcon';
import Logo from '../../public/svgs/Logo';
import Navbar from '../../components/mobile/Navbar';
import { BiMenuAltLeft } from 'react-icons/bi';


const Header = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleClick = () => {
        setShowMenu(true);
    }

    return (
        <div>
            {showMenu && <Navbar setShowMenu={setShowMenu} />}
            <div className='bg-white text-primaryblack font-roboto-slab' >
                <div className='w-[90%] mx-auto flex justify-between items-center h-[52px]'>
                    <div className='flex lg:gap-10 h-44 gap-6'>
                        <div className='flex items-center gap-1'>
                            <PhoneIcon fillColor="#FF6600" width="16px" height="14px" />
                            <span className='text-xs font-semibold'>+23470153683</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <EmailIcon fillColor="#FF6600" width="16px" height="16px" />
                            <span className='text-xs font-semibold'>elevator@gmail.com</span>
                        </div>
                    </div>
                    <div className='lg:flex gap-2 items-center hidden'>
                        <ClockIcon />
                        <span className='text-xs font-semibold'>Mon - Sat 9:00AM - 6:00PM, Sunday - Closed</span>
                    </div>
                </div>
            </div>
            <div className='bg-black h-[74px] items-center'>
                <div className='w-[90%] mx-auto text-white flex justify-between items-center h-full'>
                    <div className='flex items-center gap-16'>
                        <Logo />
                    </div>
                        <div className='lg:flex hidden items-center font-tillitium font-semibold text-sm gap-16'>
                            <a href="/" className='cursor-pointer'>Home</a>
                            <a href="/pages/about" className='cursor-pointer'>About Us</a>
                            <a href="/our-service" className='cursor-pointer'>Our Service</a>
                            <a href="/contact-us" className='cursor-pointer'>Contact US</a>
                        </div>
                    <div className='lg:hidden block' onClick={handleClick}>
                        <BiMenuAltLeft size="30px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;