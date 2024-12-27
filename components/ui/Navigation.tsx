"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import HyperText from '@/components/ui/hyper-text';
import CustomButton from '@/components/CustomButton';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Bridge', path: '/bridge' },
    { name: 'Staking', path: '/staking' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Quests', path: '/quests' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Affiliates', path: '/affiliates' },
    { name: 'Charts', path: '/charts' },
  ];

  const NavLink = ({ href, children, isActive }: { href: string; children: string; isActive: boolean }) => (
    <Link href={href} className={`ml-8 px-1.5 py-0 rounded-md transition-colors ${isActive ? 'border-b border-lime-300' : 'hover:bg-none hober:border-b hover:border-lime-300'}`}>
      <HyperText
        className={`text-[12px] font-extralight ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
        duration={500}
        animateOnHover
        startOnView={false}
      >
        {children}
      </HyperText>
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07090b]/80 backdrop-blur-sm border-b border-[#1c2023]">
      <div className="w-full">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center flex-1">
            {/* Logo */}
            <div className="pt-0 px-6 h-full align-middle justify-center">
              <div className="flex-shrink-0 align-middle justify-center">
                <Link href="/" className="flex items-center justify-center align-middle">
                  <Logo />
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block ml-4 border-l border-[#1c2023] h-full">
              <div className="flex items-center space-x-2">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    href={item.path}
                    isActive={pathname === item.path}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Connect Button */}
          <div className="hidden md:flex items-center border-l border-[#1c2023] pl-6 h-full">
            <CustomButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block rounded-md text-base font-extralight ${
                pathname === item.path
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <HyperText
                className="text-base font-extralight"
                duration={500}
                animateOnHover
                startOnView={false}
              >
                {item.name}
              </HyperText>
            </Link>
          ))}
          <div className="pt-2">
            <CustomButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 