'use client'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1F2560] text-white text-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left - Copyright */}
        <div className="text-center md:text-left">
          Copyright © 2025
        </div>

        {/* Center - ช่องทางการติดต่อ */}
        <div className="text-center font-medium">
          ช่องทางติดต่อ
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-white text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  )
}