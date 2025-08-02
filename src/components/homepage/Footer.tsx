'use client'

import { useState } from 'react'
import { FaFacebookF, FaLine, FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  const [showModal, setShowModal] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const handlePhoneClick = (number: string) => {
    setSelectedNumber(number)
    setShowModal(true)
  }

  const confirmCall = () => {
    setShowModal(false)
    window.location.href = `tel:${selectedNumber}`
  }

  return (
    <>
      <footer className="bg-[#1F2560] text-white text-sm py-4 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">Copyright © 2025</div>
          <div className="text-center font-medium">ช่องทางติดต่อ</div>
          <div className="flex gap-6 items-center text-white text-base">
            <a
              href="https://www.facebook.com/profile.php?id=61577460965495"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaFacebookF />
              Facebook
            </a>

            <a
              href="https://line.me/R/ti/p/@yourlineid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaLine />
              Line
            </a>

            <button
              onClick={() => handlePhoneClick('0845552781')}
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaPhoneAlt />
              084-555-2781
            </button>

            <button
              onClick={() => handlePhoneClick('0982546476')}
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaPhoneAlt />
              098-254-6476
            </button>
          </div>
        </div>
      </footer>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl w-[90%] max-w-sm p-6 shadow-2xl animate-fade-in text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-3">ต้องการโทรออก?</h2>
            <p className="text-gray-600 text-base mb-6">เบอร์: {selectedNumber}</p>

            <div className="flex justify-around">
  <button
    onClick={() => setShowModal(false)}
    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
  >
    ยกเลิก
  </button>

  <a href={`tel:${selectedNumber}`} className="block w-full ml-2">
    <button
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
      onClick={() => setShowModal(false)}
    >
      โทรออก
    </button>
  </a>
</div>
          </div>
        </div>
      )}
    </>
  )
}