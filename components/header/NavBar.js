import Image from 'next/image'
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import OceanBasedLogo from '../../public/images/ocean-based-logo.png';

function NavBar(props) {
  const textColor = props.dark ? 'text-shadow-md text-gray-100 hover:text-gray-300' : 'text-gray-500 hover:text-gray-800';
  return (
    <div className="pt-8">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <>
                <span className="sr-only">Ocean Blooms</span>
                <div className="h-8 w-auto sm:h-10 drop-shadow-md">
                  <Image alt="Ocean Blooms" height={48} src={OceanBasedLogo} width={48} />
                </div>
              </>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`hidden space-x-8 md:flex md:ml-10 text-base font-medium ${textColor}`}>
            <Link href="/">Climate</Link>
            <Link href="/">Science</Link>
            <Link href="/">Technology</Link>
            <Link href="/">Carbon Credits</Link>
          </div>
        </div>
        <div className={`hidden md:flex md:items-center md:space-x-6 text-base font-medium ${textColor}`}>
          <Link href="/">Log in</Link>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  dark: PropTypes.bool
};

export default NavBar;
