'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function NewNavbar() {
  return (
    <nav className="bg-[#1F2560] text-white px-4 shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo และชื่อบริษัท */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/civil-logo.jpg"
            alt="Civil Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-lg font-bold whitespace-nowrap">
            บริษัท ซีวิล คอนสตรัคชั่น โปรดักส์ จำกัด
          </span>
        </div>

        {/* เมนูด้านขวา */}
        <div className="space-x-6 text-sm font-medium hidden md:flex">
          <Link href="/" className="hover:underline">
            หน้าหลัก
          </Link>
          <Link href="/services" className="hover:underline">
            บริการ
          </Link>
          <Link href="/projects" className="hover:underline">
            ผลงาน
          </Link>
          <Link href="/about" className="hover:underline">
            เกี่ยวกับเรา
          </Link>
        </div>
      </div>
    </nav>
  )
}