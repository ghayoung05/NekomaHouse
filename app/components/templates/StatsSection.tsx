'use client'

import { Dispatch, SetStateAction } from 'react';

interface StatsSectionProps {
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
  setShowVideoModal: Dispatch<SetStateAction<boolean>>;
}

export default function StatsSection({
  setShowRegisterModal,
  setShowVideoModal
}: StatsSectionProps) {

  return (
    <>

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
    </>
  );
}
