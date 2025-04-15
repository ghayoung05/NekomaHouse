'use client'

import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')


  const services = [
    { id: 1, name: 'Cat Boarding', description: 'Safe, cozy, and stress-free stay for your feline friends' },
    { id: 2, name: 'Grooming & Spa', description: 'Pampering sessions for happy, healthy cats' },
    { id: 3, name: 'Behavior & Wellness Check', description: 'Helping you understand your cat better' },
  ]


  const handleContactSubmit = (e) => {
    e.preventDefault()

    alert('Thank you for your message! We will contact you soon.')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>NekomaHouse</title>
        <meta name="description" content="Fill your home with colour" />
      </Head>


      <header className="sticky top-0 z-10 bg-purple-200 shadow-sm py-5">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 
                className="text-3xl md:text-4xl font-bold uppercase text-white">
                NekomaHouse
              </h1>
            
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
              {['home', 'about', 'services', 'contact'].map((item) => (
                <Link 
                  href={`#${item}`} 
                  key={item}
                  passHref
                >
                  <span 
                    className={`font-bold uppercase cursor-pointer px-2 py-1 rounded transition-all 
                      ${activeSection === item ? 'text-white border-b-2 border-purple-600' : 'hover:text-purple-600'}`}
                    onClick={() => setActiveSection(item)}
                  >
                    {item.toUpperCase()}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-5 py-10">
        
        <section id="home" className="py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Welcome To Nekoma House</h2>
            <h3 className="text-2xl md:text-1xl font-bold  mb-8 text-purple-900">Your Cat's Daily Dose of Love</h3>
            
            <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
              <img src="https://cdn.shopify.com/s/files/1/0015/5117/1636/files/Black_cat_with_pumpkins.jpg?v=1695808139" 
              alt=""
              fill
              className="object-cover object-center"
              quality={100}
              priority />
            </div>
            
            <p className="text-lg leading-relaxed text-purple-400 max-w-2xl mx-auto">
            Explore our cozy corner for cats — find helpful info, browse our services, and feel free to ask about anything. No memberships, no hassle — just purrfect care made simple.
            </p>
          </div>
        </section>

        <section id="about" className="py-16 bg-white rounded-lg shadow-sm mb-10">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-3xl text-purple-300 font-bold mb-8 text-center">ABOUT US</h2>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">

                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                  <img src="https://i.pinimg.com/736x/73/8e/6b/738e6bbd4929044b7db86e9a1b60b161.jpg" alt="" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl text-purple-900 font-semibold mb-4">YOUR CAT CARE COMPANION</h3>
                <h4 className="text-xl font-bold uppercase mb-6 text-purple-300">MEET NEKOMA</h4>
                <p className="text-gray-700 mb-4">
                Learn what your cat loves the most, even while you're sipping coffee in Canggu or catching sunrises in Kintamani (or just scrolling at home in pajamas)!

                </p>
                <p className="text-gray-700">
                Our cozy cat-loving team is here to give your feline the love and care they deserve. With years of experience and a heart full of meows, we make sure every whisker feels right at home
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">OUR SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-purple-900 text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">CONTACT US</h2>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-900 text-white py-3 px-4 rounded-md hover:bg-purple-200 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>


      <footer className="bg-purple-900 text-white py-10">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">NekomaHouse</h2>
              <p className="text-gray-400">A peaceful place for every precious paw</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-4 mb-4">
                {['facebook', 'instagram', 'twitter'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                    aria-label={social}
                  >
                    <span className="text-lg">{social === 'facebook' ? 'f' : social === 'instagram' ? 'ig' : 'x'}</span>
                  </a>
                ))}
              </div>
              <p className="text-gray-400">&copy; {new Date().getFullYear()} NekomaHouse. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}