import React, { useState } from 'react';
import imag from '../icon/CardImg.svg';
import trophy from '../icon/IMAGE.svg'
import stars1 from '../icon/stars1.svg'
import stars2 from '../icon/stars2.svg'
import stars3 from '../icon/stars3.svg'
import dimond from '../icon/dimond.svg'
import down1 from '../icon/bluedown.svg'
function Card() {

  const [isCircleHovered, setIsCircleHovered] = useState(false);

  return (
    <div className="mt-10 relative flex items-center border border-gray-200 p-4 rounded-lg hover:border-blue-500">
      <div className="absolute top-0 left-0 h-full">
        <div className="bg-orange-500 px-2 py-1 rounded flex items-center transform -translate-x-1/5 -translate-y-1/2">
          <img src={trophy} alt="Trophy" className="w-6 h-6 text-white" />
          <span className="text-white text-xs font-bold ml-1">Best Choice</span>
        </div>
      </div>
      {/* Left side: number and image */}
      <div className="flex-shrink-0 mr-4 relative">
        <div
          className={`w-8 h-8 border-2 border-blue-250 rounded-full flex items-center justify-center cursor-pointer ${isCircleHovered ? 'border-blue-500' : 'border-blue-100'}`}
          onMouseEnter={() => setIsCircleHovered(true)}
          onMouseLeave={() => setIsCircleHovered(false)}
          style={{ marginLeft: '-2rem' }}
        >
          <span className={`text-w-10px h-28px relative ${isCircleHovered ? 'text-blue-500' : 'text-gray-500'}`}>1</span>
        </div>
      </div>


      <div className='flex-shrink-0 mr-4'>
        <img src={imag} alt="Card" className="w-141px h-103px rounded-md mt-422px ml-326px" />
        <p className='text-center'>Builder 1</p>
      </div>

      {/* Center content */}
      <div className="flex-grow">
        {/* Text content */}
        <div className="mb-1 px-10">
          <p><strong>WixPro 72-Inch Responsive Website Builder- </strong> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
          <div className='mt-2'>
            <strong>Main highlights</strong>
            <p className="mt-1 ml-5">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
          </div>
        </div>

        {/* Show more button */}
        <div className="flex items-center">
          <button className="text-blue-500 ml-10 hover:text-blue-600 focus:outline-none">Show more</button>
          <img src={down1} alt="down1" className="ml-1 h-4 w-4" />
        </div></div>

      {/* Right side: rating square and view button */}
      <div className="flex-shrink-0 ml-4 mr-7">
        {/* Rating square */}
        <div className="bg-gray-200 text-center rounded-md p-2 px-4 py-3">
          <p className="font-bold text-blue-900">9.8</p>
          <p className='text-blue-900'>Exceptional</p>
          <div className="mt-2 flex items-center justify-center">
            {/* SVG containing all stars */}
            <img src={stars1} alt="All Stars" className="w-24 h-auto" />
          </div>
        </div>

        {/* View button */}
        <button className="mt-4 bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600 focus:outline-none">View</button>
      </div>
    </div>
  );
}

function MultipleCards() {
  const [isCircleHovered, setIsCircleHovered] = useState(false);
  return (
    <div>
      {/* First Card */}
      <Card />

      {/* Second Card */}
      <div className="mt-10 relative flex items-center border border-gray-200 p-4 rounded-lg hover:border-blue-500">
        <div className="absolute top-0 left-0 h-full">
          <div className="bg-orange-500 px-2 py-1 rounded flex items-center transform -translate-x-1/5 -translate-y-1/2">
            <img src={dimond} alt="Dimond" className="w-6 h-6 text-white" />
            <span className="text-white text-xs font-bold ml-1">Best Choice</span>
          </div>
        </div>
        {/* Left side: number and image */}
        <div className="flex-shrink-0 mr-4 relative">
          <div
            className={`w-8 h-8 border-2 border-blue-250 rounded-full flex items-center justify-center cursor-pointer ${isCircleHovered ? 'border-blue-500' : 'border-blue-100'}`}
            onMouseEnter={() => setIsCircleHovered(true)}
            onMouseLeave={() => setIsCircleHovered(false)}
            style={{ marginLeft: '-2rem' }}
          >
            <span className={`text-w-10px h-28px relative ${isCircleHovered ? 'text-blue-500' : 'text-gray-500'}`}>2</span>
          </div>
        </div>
        <div className='flex-shrink-0 mr-4'>
          <img src={imag} alt="Card" className="w-141px h-103px rounded-md mt-422px ml-326px" />
          <p className='text-center'>Builder</p>
        </div>

        {/* Center content */}
        <div className="flex-grow">
          {/* Text content */}
          <div className="mb-1 px-10">
            <p><strong>SiteCraft 68-Inch Ultimate Web Design Studio- </strong> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
            <div className='mt-2'>
              <strong>Main highlights</strong>
              <p className="mt-1 ml-5">[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
            </div>
          </div>

          {/* Show more button */}
          <div className="flex items-center">
            <button className="text-blue-500 ml-10 hover:text-blue-600 focus:outline-none">Show more</button>
            <img src={down1} alt="down1" className="ml-1 h-4 w-4" />
          </div>
        </div>

        {/* Right side: rating square and view button */}
        <div className="flex-shrink-0 ml-4 mr-7">
          {/* Rating square */}
          <div className="bg-gray-200 text-center rounded-md p-2 px-4 py-3">
            <p className="font-bold text-blue-900">9.5</p>
            <p className='text-blue-900'>Excellent</p>
            <div className="mt-2 flex items-center justify-center">
              {/* SVG containing all stars */}
              <img src={stars2} alt="All Stars" className="w-24 h-auto" />
            </div>
          </div>

          {/* View button */}
          <button className="mt-4 bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600 focus:outline-none">View</button>
        </div>
      </div>




      {/* third Card */}
      <div className="mt-10 relative flex items-center border border-gray-200 p-4 rounded-lg hover:border-blue-500">

        {/* Left side: number and image */}
        <div className="flex-shrink-0 mr-4 relative">
          <div
            className={`w-8 h-8 border-2 border-blue-250 rounded-full flex items-center justify-center cursor-pointer ${isCircleHovered ? 'border-blue-500' : 'border-blue-100'}`}
            onMouseEnter={() => setIsCircleHovered(true)}
            onMouseLeave={() => setIsCircleHovered(false)}
            style={{ marginLeft: '-2rem' }}
          >
            <span className={`text-w-10px h-28px relative ${isCircleHovered ? 'text-blue-500' : 'text-gray-500'}`}>3</span>
          </div>
        </div>
        <div className='flex-shrink-0 mr-4'>
          <img src={imag} alt="Card" className="w-141px h-103px rounded-md mt-422px ml-326px" />
          <p className='text-center'>Builder 1</p>
        </div>

        {/* Center content */}
        <div className="flex-grow">
          {/* Text content */}
          <div className="mb-1 px-10">
            <p><strong>WixPro 72-Inch Responsive Website Builder- </strong> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
            <div className='mt-2'>
              <strong>Main highlights</strong>
              <p className="mt-1 ml-5">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
            </div>
          </div>

          {/* Show more button */}
          <div className="flex items-center">
            <button className="text-blue-500 ml-10 hover:text-blue-600 focus:outline-none">Show more</button>
            <img src={down1} alt="down1" className="ml-1 h-4 w-4" />
          </div>
        </div>

        {/* Right side: rating square and view button */}
        <div className="flex-shrink-0 ml-4 mr-7">
          {/* Rating square */}
          <div className="bg-gray-200 text-center rounded-md p-2 px-4 py-3">
            <p className="font-bold text-blue-900">9.3</p>
            <p className='text-blue-900'>Exceptional</p>
            <div className="mt-2 flex items-center justify-center">
              {/* SVG containing all stars */}
              <img src={stars1} alt="All Stars" className="w-24 h-auto" />
            </div>
          </div>

          {/* View button */}
          <button className="mt-4 bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600 focus:outline-none">View</button>
        </div>
      </div>



      {/* fourth Card */}
      <div className="mt-10 relative flex items-center border border-gray-200 p-4 rounded-lg hover:border-blue-500">

        {/* Left side: number and image */}
        <div className="flex-shrink-0 mr-4 relative">
          <div
            className={`w-8 h-8 border-2 border-blue-250 rounded-full flex items-center justify-center cursor-pointer ${isCircleHovered ? 'border-blue-500' : 'border-blue-100'}`}
            onMouseEnter={() => setIsCircleHovered(true)}
            onMouseLeave={() => setIsCircleHovered(false)}
            style={{ marginLeft: '-2rem' }}
          >
            <span className={`text-w-10px h-28px relative ${isCircleHovered ? 'text-blue-500' : 'text-gray-500'}`}>4</span>
          </div>
        </div>

        <div className='flex-shrink-0 mr-4'>
          <img src={imag} alt="Card" className="w-141px h-103px rounded-md mt-422px ml-326px" />
          <p className='text-center'>CDK</p>
        </div>

        {/* Center content */}
        <div className="flex-grow">
          {/* Text content */}
          <div className="mb-1 px-10">
            <p><strong>CDK Resposive Builder:  </strong>An extensive library of widgets and apps, and detailed step-by-step guides</p>
            <div className='mt-2'>
              <div className="mt-2 inline-block bg-blue-100 text-blue-500 px-2 py-1 rounded">
                26% Off
              </div>
              <br></br>
              <strong>Main Highlights:</strong>
              <div className="mt-2 ml-5 bg-pink-100 text-[#4B5665] px-2 py-1 rounded">

                <ul className="list-disc ml-5">
                  <li className="mt-1 flex items-center">9.9 - Building Responsive</li>
                  <li className="mt-1 flex items-center">8.9 - Cool</li>
                  <li className="mt-1 flex items-center">8.9 - Docs</li>
                </ul>
              </div>
              <div className="mt-2 text-[#4B5665] px-2 py-1 rounded">
                <strong>Why we love it:</strong>
                <ul className="list-disc ml-5">
                  <li className="mt-1 flex items-center">&#10003; Documentation</li>
                  <li className="mt-1 flex items-center">&#10003; Easy Use</li>
                  <li className="mt-1 flex items-center">&#10003; Out Of Box</li></ul>
              </div>
            </div>
          </div>

          {/* Show more button */}
          <div className="flex items-center">
            <button className="text-blue-500 ml-10 hover:text-blue-600 focus:outline-none">Show more</button>
            <img src={down1} alt="down1" className="ml-1 h-4 w-4" />
          </div>
        </div>

        {/* Right side: rating square and view button */}
        <div className="flex-shrink-0 ml-4 mr-7">
          {/* Rating square */}
          <div className="bg-gray-200 text-center rounded-md p-2 px-4 py-3">
            <p className="font-bold text-blue-900">9.1</p>
            <p className='text-blue-900'>Very Good</p>
            <div className="mt-2 flex items-center justify-center">
              {/* SVG containing all stars */}
              <img src={stars3} alt="All Stars" className="w-24 h-auto" />
            </div>
          </div>

          {/* View button */}
          <button className="mt-4 bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600 focus:outline-none">View</button>
        </div>
      </div>
    </div>
  );
}

export default MultipleCards;
