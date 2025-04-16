'use client'

import RegisterBtn from "../atoms/RegisterBtn";
type NavbarProps = {
  setShowLoginModal: (value: boolean) => void;
  setShowRegisterModal: (value: boolean) => void;
  setShowContactModal: (value: boolean) => void;
  setShowPriceModal: (value: boolean) => void;
};

export default function Navbar({
  setShowLoginModal,
  setShowRegisterModal,
  setShowContactModal,
  setShowPriceModal,
}: NavbarProps) {
  
  const scrollToMeetNekoma = () => {
    const element = document.getElementById('meet-nekoma');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="container bg-blue-200 mx-auto px-4 py-6 flex justify-between items-center">
      <div className="text-3xl font-bold text-gray-800">
        <span className="text-white">NekomaHouse</span>
      </div>

      <nav className="hidden md:flex space-x-8">
        <button 
          onClick={scrollToMeetNekoma}
          className="text-gray-700 hover:text-blue-900 bg-transparent border-none cursor-pointer"
        >
          About Us
        </button>
        <button 
          onClick={() => setShowContactModal(true)}
          className="text-gray-700 hover:text-blue-900 bg-transparent border-none cursor-pointer"
        >
          Contact
        </button>
        <button 
          onClick={() => setShowPriceModal(true)}
          className="text-gray-700 hover:text-blue-900 bg-transparent border-none cursor-pointer"
        >
          Price
        </button>
        <a href="#" className="text-gray-700 hover:text-blue-900">Guarantee</a>
      </nav>

      <div className="flex space-x-4">
        <button 
          onClick={() => setShowLoginModal(true)}
          className="px-4 py-2 text-gray-700 hover:text-blue-300"
        >
          Login
        </button>
        <RegisterBtn setShowRegisterModal={setShowRegisterModal} />
      </div>
    </header>
  );
}
