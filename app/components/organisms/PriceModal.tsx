'use client'

import { Dispatch, SetStateAction } from 'react';
export default function PriceModal({ setShowPriceModal }: { setShowPriceModal: Dispatch<SetStateAction<boolean>> }) {
  return (
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
  );
}