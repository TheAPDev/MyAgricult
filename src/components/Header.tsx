import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-white/90 shadow-md py-4 px-6 flex items-center justify-center sticky top-0 z-50 animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold text-emerald-700 tracking-wide text-center">
        MyAgricult
      </h1>
    </nav>
  );
};

export default Header;
