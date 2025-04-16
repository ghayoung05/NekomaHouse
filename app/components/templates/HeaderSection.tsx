'use client'

import { Dispatch, SetStateAction } from 'react';
import RegisterBtn from '../atoms/RegisterBtn';

interface HeaderSectionProps {
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
    setShowVideoModal: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderSection({
  setShowRegisterModal,
    setShowVideoModal
}: HeaderSectionProps) {

  const scrollToMeetNekoma = () => {
    const element = document.getElementById('meet-nekoma');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
   
<section id="meet-nekoma" className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
<div className="md:w-1/2 mb-10 md:mb-0">
  <h1 className="text-2xl md:text-4xl font-bold text-grey-900 mb-6">
    MEET NEKOMA
  </h1>
  <p className="text-xl text-blue-900 mb-8">
    Learn what your cat loves the most, even while you're sipping coffee in Canggu or catching sunrises in Kintamani (or just scrolling at home in pajamas)!
    <br /><br />
    Our cozy cat-loving team is here to give your feline the love and care they deserve. With years of experience and a heart full of meows, we make sure every whisker feels right at home.
  </p>
  <div className="flex space-x-4">
    
    <RegisterBtn setShowRegisterModal={setShowRegisterModal} />
    <button 
      onClick={() => setShowVideoModal(true)}
      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 flex items-center"
    >
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
      Watch
    </button>
  </div>
</div>
<div className="md:w-1/2 h-80 md:h-96 relative rounded-lg overflow-hidden">
  <img
    src="https://i.pinimg.com/736x/e5/c8/a6/e5c8a6f4a54a37e3ac1b2ed29375cbe6.jpg" 
    alt="Happy cat at NekomaHouse"
    className="rounded-lg"
  />
</div>
</section>
  );
}
