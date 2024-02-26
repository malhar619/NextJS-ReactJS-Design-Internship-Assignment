import React from 'react';
import down from '../icon/down.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-[#D1D6DA] mt-10 py-8">
      <div className="container mx-auto px-4 lg:px-0 max-w-screen-lg">
        <div className="flex justify-between">
          <div>
            <h4 className="text-lg font-semibold mb-4">CATEGORIES</h4>
            <ul className="list-none text-sm p-0 m-0">
              <li>Web Builder</li>
              <li>Hosting</li>
              <li>Data Center</li>
              <li>Robotic Automation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTACT</h4>
            <ul className="list-none text-sm p-0 m-0">
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Categories</li>
              <li>About</li>
            </ul>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-semibold">United States</p>
            <img src={down} alt="down" className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
