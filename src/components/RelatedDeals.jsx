import React, { useState } from 'react';
import cardimag from '../icon/CardImg.svg';
function RelatedDeals() {
  return (
    <div className="container mx-auto px-4 lg:px-0 max-w-screen-lg mt-10">
      <h2 className="text-xl font-medium mb-4">Related deals you might like for</h2>
      <div className="flex justify-between">
        <DealCard
          image={cardimag}
          discount="20% Off"
          time="Limited time"
          title="Webbuilder1"
          description="Computer Modern clasic with wix support"
          price="$39.96"
          originalPrice="$49.96"
        />
        <DealCard
          image={cardimag}
          discount="20% Off"
          time="Limited offer"
          title="Webbuilder1"
          description="Computer  Modern clasic with wix support"
          price="$39.96"
          originalPrice="$49.96"
        />
        <DealCard
          image={cardimag}
          discount="20% Off"
          time="Limited offer"
          title="Webbuilder1"
          description="Computer  Modern clasic with wix support"
          price="$39.96"
          originalPrice="$49.99"
        />
      </div>
    </div>
  );
}

function DealCard({ image, discount, time, title, description, price, originalPrice }) {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`w-1/3 bg-white p-4 rounded-lg shadow-md ${isHovered ? 'border-2 border-blue-500' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center mb-2">
        <img src={image} alt="Deal" className="h-103px w-141px rounded-lg" />
      </div>
      <div className="flex items-center text-xs justify-start mb-2 ">
        <span className="text-blue-500 bg-blue-100 rounded p-1 inline-block">{discount}</span>
        <span className="text-blue-500 bg-blue-100 rounded p-1 inline-block ml-2">{time}</span>
      </div>
      <h3 className="text-lg text-center font-semibold mb-1">{title}</h3>
      <p className="text-gray-500 mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xl font-semibold">{price}</span>
          <span className="text-xs text-gray-500 ml-3">{originalPrice}</span>
          <span className="text-xs text-red-500 ml-3">(20% Off)</span>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button className="bg-blue-500 text-white w-full py-2 rounded-full">View Deal</button>
      </div>
    </div>
  );
}
  

export default RelatedDeals;
