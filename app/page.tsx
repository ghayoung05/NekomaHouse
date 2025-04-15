'use client'

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);

  const scrollToMeetNekoma = () => {
    const element = document.getElementById('meet-nekoma');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>NekomaHouse - Your Cat's Daily Dose of Love</title>
        <meta name="description" content="Your Cat's Daily Dose of Love" />
      </Head>

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
          <button 
            onClick={() => setShowRegisterModal(true)}
            className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-300"
          >
            Register
          </button>
        </div>
      </header>

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
            <button 
              onClick={() => setShowRegisterModal(true)}
              className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-200"
            >
              Register
            </button>
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

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="text-center mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Quickly</h3>
              <p className="text-blue-300">Fast and easy booking</p>
            </div>
            <div className="text-center mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Qualitatively</h3>
              <p className="text-blue-300">High quality service</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Carefully</h3>
              <p className="text-blue-300">Gentle care for your pet</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
              <p className="text-gray-700">Satisfied users</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">1035</div>
              <p className="text-gray-700">The owners give it free days</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100</div>
              <p className="text-gray-700">Selected hotel workers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">1</div>
              <p className="text-gray-700">Totten kitten ways</p>
            </div>
          </div>
        </div>
      </section>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input type="password" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="flex justify-end space-x-4">
                <button 
                  type="button" 
                  onClick={() => setShowLoginModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-200"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input type="password" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="flex justify-end space-x-4">
                <button 
                  type="button" 
                  onClick={() => setShowRegisterModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-300"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Welcome To NekomaHouse</h2>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Video Player Placeholder</span>
            </div>
          </div>
        </div>
      )}

      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl text-blue-900 font-bold mb-6 text-center">Contact NekomaHouse</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-6 h-6 text-pink-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-gray-600">@nekoma.house</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">hello@nekoma.house</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button 
                onClick={() => setShowContactModal(false)}
                className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showPriceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Pricing</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Daily Care</h3>
                  <p className="text-blue-900 font-bold">Rp 150,000/day</p>
                </div>
                <p className="text-gray-600 text-sm">Includes meals, playtime, and daily updates</p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Weekly Package</h3>
                  <p className="text-blue-900 font-bold">Rp 900,000/week</p>
                </div>
                <p className="text-gray-600 text-sm">7 days for the price of 6 (save Rp 150,000)</p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Monthly Package</h3>
                  <p className="text-blue-900 font-bold">Rp 3,500,000/month</p>
                </div>
                <p className="text-gray-600 text-sm">30 days for the price of 23 (save Rp 1,000,000)</p>
              </div>
              
              <div className="pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Premium Suite</h3>
                  <p className="text-blue-900 font-bold">Rp 250,000/day</p>
                </div>
                <p className="text-gray-600 text-sm">Luxury accommodation with webcam access</p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button 
                onClick={() => setShowPriceModal(false)}
                className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}