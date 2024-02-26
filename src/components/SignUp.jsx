import React from 'react';

const SignUpContent = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="w-full">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-4 md:p-6 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-auto flex-grow-0">
              <h2 className="text-xl mr-11 font-bold">Sign up and get exclusive special deals</h2>
            </div>
            <div className="w-full ml-10 md:w-auto flex-grow flex justify-end items-center mt-4 md:mt-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="border text-center border-gray-300 p-2 rounded-l-md focus:outline-none flex-grow"
              />
              <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none text-sm md:text-base">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpContent;
