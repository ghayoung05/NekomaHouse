'use client'

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import HeaderSection from '../templates/HeaderSection';
import StatsSection from '../templates/StatsSection';
import ContactModal from '../organisms/ContactModal';
import LoginModal from '../organisms/LoginModal';
import PriceModal from '../organisms/PriceModal';
import RegisterModal from '../organisms/RegisterModal';
import VideoModal from '../organisms/VideoModal';
import Navbar from '../molecules/Navbar';

export default function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>NekomaHouse - Your Cat's Daily Dose of Love</title>
        <meta name="description" content="Your Cat's Daily Dose of Love" />
      </Head>

      <Navbar
        setShowLoginModal={setShowLoginModal} 
        setShowRegisterModal={setShowRegisterModal}
        setShowContactModal={setShowContactModal}
        setShowPriceModal={setShowPriceModal}
      />

        <HeaderSection 
            setShowRegisterModal={setShowRegisterModal} 
            setShowVideoModal={setShowVideoModal}
        />
        <StatsSection
            setShowRegisterModal={setShowRegisterModal} 
            setShowVideoModal={setShowVideoModal}
        />

      {showLoginModal && (
        <LoginModal setShowLoginModal={setShowLoginModal} />
      )}

      {showRegisterModal && (
        <RegisterModal setShowRegisterModal={setShowRegisterModal} />
      )}

      {showVideoModal && (
        <VideoModal setShowVideoModal={setShowVideoModal} />
      )}

      {showContactModal && (
        <ContactModal setShowContactModal={setShowContactModal} />
      )}

      {showPriceModal && (
        <PriceModal setShowPriceModal={setShowPriceModal} />
      )}
    </div>
  );
}