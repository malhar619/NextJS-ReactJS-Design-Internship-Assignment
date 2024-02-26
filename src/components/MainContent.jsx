import React from 'react';
import Exlamation from '../icon/exlamation';
import Right from '../icon/righttick';
import Down from '../icon/dropdown';
import MultipleCards from './cards';
import RelatedDeals from './RelatedDeals';
import SignUpContent from './SignUp';
function MainContent() {
  return (
    <div className="container mx-auto px-4 lg:px-0 max-w-screen-lg">
      <div className="relative">

        {/* Heading */}
        <h5 className="text-[#2C384A] text-3xl font-inter mt-8">Best Website builders in the US</h5>

        {/* Small content */}
        <hr className="h-px my-3 mb-0 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex mt-2 text-[#4B5665] font-inter">
          <RightButton />
          <div className='mr-2' />
          <p className="text-sm text-left md:text-base mr-7">Last Updated - February 22, 2020</p>
          <ExlamationButton />
          <div className='mr-2' />
          <p className="text-sm text-left md:text-base">Advertising Disclosure</p>
          <div className="flex flex-grow items-center justify-end">
            <p className="text-sm text-left md:text-base mr-2">Top Relevance</p>
            <DownButton />
          </div>
        </div>

        <hr className="h-px bg-gray-200 mt-2 border-0 dark:bg-gray-700"></hr>
        <div className="flex mt-2 flex-wrap">
          <ResponsiveButton>Tools</ResponsiveButton>
          <ResponsiveButton>AWS Builder</ResponsiveButton>
          <ResponsiveButton>Start Build</ResponsiveButton>
          <ResponsiveButton>Build Supplies</ResponsiveButton>
          <ResponsiveButton>Tooling</ResponsiveButton>
          <ResponsiveButton>BlueHosting</ResponsiveButton>
        </div>


        <div className="mt-2 flex text-sm text-gray-500">
          <button className="mr-2 rounded-md text-[#4B5665] hover:border-blue-500 hover:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-400">Home</button>
          <span className="mr-2">{'>'}</span>
          <button className="mr-2 rounded-md text-[#4B5665] hover:border-blue-500 hover:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-400">Hosting for all</button>
          <span className="mr-2">{'>'}</span>
          <button className="mr-2 rounded-md text-[#4B5665] hover:border-blue-500 hover:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-400">Hosting</button>
          <span className="mr-2">{'>'}</span>
          <button className="mr-2 rounded-md text-[#4B5665] hover:border-blue-500 hover:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-400">Hosting6</button>
          <span className="mr-2">{'>'}</span>
          <button className="mr-2 rounded-md text-[#4B5665] hover:border-blue-500 hover:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-400">Hosting5</button>
        </div>

        {/*Other Part*/}

        <MultipleCards/>
        <RelatedDeals/>
        <SignUpContent/>

      </div>
    </div>
  );
}









/********************************************************************************************/
function RightButton() {
  return (
    <button onClick={() => { /* Add your click handler here */ }}>
      <Right />
    </button>
  );
}

function ExlamationButton() {
  return (
    <button onClick={() => { /* Add your click handler here */ }}>
      <Exlamation />
    </button>
  );
}

function DownButton() {
  return (
    <button onClick={() => { /* Add your click handler here */ }}>
      <Down />
    </button>
  );
}

function ResponsiveButton({ children }) {
  return (
    <button className="px-2 md:px-4 bg-white py-2 mb-2 mr-2 md:mr-4 rounded-md text-[#4B5665] hover:border-blue-500 hover:shadow-outline focus:outline-none focus:ring-2 focus:ring-blue-400">
      {children}
    </button>
  );
}
export default MainContent;
