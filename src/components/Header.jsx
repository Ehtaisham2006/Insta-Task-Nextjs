import React from 'react'
import { MdHome } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { FaRegCompass, FaRegHeart } from "react-icons/fa6";
import { GiRamProfile } from "react-icons/gi";
import Link from 'next/link';
import Logo from './Logo';
import Inputfield from './Inputfield';

const Header = () => {
  const icons = [
     { icon: <MdHome size={24} />, path: "/" },
     { icon: <RiMessengerLine size={24} />, path: "/messenger" },
     { icon: <CgAddR size={24} />, path: "/add" },
     { icon: <FaRegCompass size={24} />, path: "/explore" },
     { icon: <FaRegHeart size={24} />, path: "/notifications" },
     { icon: <GiRamProfile size={24} />, path: "/profile" }
  ]

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-3.5 bg-blue-600 text-white shadow-md border-b border-blue-700">
        <div className="flex items-center brightness-0 invert">
            <Logo />
        </div>
        <div className="flex-1 max-w-md mx-6">
            <Inputfield />
        </div>
        <nav className="flex items-center space-x-6">
            {icons.map((item, index) => (
                <Link key={index} href={item.path} className="text-white hover:text-blue-200 transition-transform duration-150 hover:scale-110">
                    {item.icon}
                </Link>
            ))}
        </nav>
    </header>
  )
}

export default Header