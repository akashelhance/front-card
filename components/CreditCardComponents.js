import Image from 'next/image';
import Link from 'next/link';
import test from '@/assets/images/s.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';

export default function CreditCardComponents() {

    return <>
    
    <div className="container mx-auto p-4">
  <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full relative">
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Card Heading</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <img 
            src="https://cardinsider.com/wp-content/uploads/2021/08/Axis-Bank-Neo-Credit-Card.webp" 
            alt="Image" 
            className="object-cover h-full w-full" 
          />
        </div>
        <div className="w-full lg:w-3/4 flex flex-col">
          <button className="bg-blue-500 text-white px-6 py-3 rounded mb-4 text-lg lg:hidden">
            Apply Now
          </button>
          <div className="mt-2 lg:pl-8">
            <div className="flex flex-col mb-4 space-y-4">
              <div className="flex items-center mb-2">
                <span className="font-bold text-lg lg:text-xl">Joining Fee:</span>
                <span className="ml-4 text-lg lg:text-xl">0</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="font-bold text-lg lg:text-xl">Annual Fee:</span>
                <span className="ml-4 text-lg lg:text-xl">500</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="font-bold text-lg lg:text-xl">Welcome Benefits:</span>
                <span className="ml-4 text-lg lg:text-xl">10,000 Reward Points</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="font-bold text-lg lg:text-xl">Reward Type:</span>
                <span className="ml-4 text-lg lg:text-xl">Points</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="absolute top-4 right-4 bg-blue-500 text-white px-6 py-3 rounded text-lg hidden lg:block">
      Apply Now
    </button>
  </div>
</div>





    </>


}