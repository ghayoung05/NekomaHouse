'use client'

import { Dispatch, SetStateAction } from 'react';
export default function VideoModal({ setShowVideoModal }: { setShowVideoModal: Dispatch<SetStateAction<boolean>> }) {
  return (
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
  );
}