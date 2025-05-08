
import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SoftSell</h1>
        <button className="px-6 py-2 bg-secondary text-black rounded-full">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
