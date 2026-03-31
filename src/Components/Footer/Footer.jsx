import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#031533] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">HERO.IO</h2>
          <p className="text-gray-300 leading-relaxed">
            HERO.IO is your ultimate app marketplace designed to help you discover, install, and manage productivity applications. We connect millions of users with innovative apps that transform their daily lives. Our mission is to make powerful tools accessible to everyone.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">About Hero Apps</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Newsroom</li>
            <li>Leadership</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Newsroom</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">About Hero Apps</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Newsroom</li>
            <li>Leadership</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Newsroom</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Social Icons</h3>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="text-white hover:text-purple-400"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-purple-400"><FaYoutube /></a>
            <a href="#" className="text-white hover:text-purple-400"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-purple-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} HERO.IO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;