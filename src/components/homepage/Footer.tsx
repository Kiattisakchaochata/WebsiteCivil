'use client'

import { FaFacebookF, FaLine, FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1F2560] text-white text-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Copyright */}
        <div className="text-center md:text-left">
          Copyright © 2025
        </div>

        {/* Center - ช่องทางการติดต่อ */}
        <div className="text-center font-medium">
          ช่องทางติดต่อ
        </div>

        {/* Right - ช่องทาง */}
        <div className="flex gap-6 items-center text-white text-base">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61577460965495"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <FaFacebookF />
            Facebook
          </a>

          {/* Line */}
          <a
            href="https://line.me/R/ti/p/@yourlineid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <FaLine />
            Line
          </a>

          {/* Phone */}
          <a
            href="tel:0845552781"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <FaPhoneAlt />
            084-555-2781
          </a>

          <a
            href="tel:0982546476"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <FaPhoneAlt />
            098-254-6476
          </a>
        </div>
      </div>
    </footer>
  )
}