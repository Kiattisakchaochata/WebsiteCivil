'use client'

import Image from 'next/image'
import { useState } from 'react'
import ServiceModal from '@/components/homepage/ServiceModal'

type ServiceItem = {
  id: number
  category: string
  title: string
  image: string
  description: string
  fullText?: string
}

const services: ServiceItem[] = [
  {
    id: 1,
    category: 'งานติดตั้ง',
    title: 'ติดตั้งพื้น EPOXY',
    image: '/images/epoxy1.png',
    description:
      '“รู้จัก ‘พื้นอีพ็อกซี่’ พื้นสุดแกร่งที่ครองใจทุกอุตสาหกรรม” และใช้งานได้หลากหลาย ไม่ว่าจะในโรงงาน โกดัง หรือพื้นที่เชิงพาณิชย์ — พื้นอีพ็อกซี่คือคำตอบ!',
  },
  {
    id: 2,
    category: 'งานติดตั้ง',
    title: 'พื้นคอนกรีต',
    image: '/images/hardener.png',
    description:
      'แข็งแรง ทนทาน ตอบโจทย์ทุกงานอุตสาหกรรม และรองรับน้ำหนักได้ดีเยี่ยม เหมาะกับพื้นที่ใช้งานหนัก',
  },
  {
    id: 3,
    category: 'งานติดตั้ง',
    title: 'พื้น PU',
    image: '/images/pu.png',
    description:
      'ทางเลือกใหม่สำหรับโรงงานที่ต้องการมาตรฐานสูงสุด ทนเคมี ทนร้อน ทนเย็น และปลอดภัยต่ออาหาร',
  },
  {
    id: 4,
    category: 'งานซ่อมแซม',
    title: 'ซ่อมรอยร้าว',
    image: '/images/repair-crack.png',
    description:
      'ซ่อมรอยร้าวพื้นคอนกรีต-กำแพง ด้วย Epoxy Injection มาตรฐานสูง ซึมลึกและแนบสนิท',
  },
  {
    id: 5,
    category: 'งานซ่อมแซม',
    title: 'กันซึมดาดฟ้า',
    image: '/images/waterproof.png',
    description:
      'เรื่องใหญ่ที่ไม่ควรมองข้าม! เพราะปัญหาน้ำรั่วซึมไม่ใช่แค่เปียก แต่คือความเสียหายต่อโครงสร้าง',
  },
  {
    id: 6,
    category: 'งานซ่อมแซม',
    title: 'ผนังร้าว',
    image: '/images/wall-crack.png',
    description:
      'ปล่อยไว้ไม่ใช่แค่เรื่องสวยงาม แต่คือเรื่องโครงสร้าง! เรามีระบบซ่อมแซมพร้อมทีมงานมืออาชีพ',
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  const openModal = (service: ServiceItem) => setSelectedService(service)
  const closeModal = () => setSelectedService(null)

  const renderSection = (category: string, id: string) => (
    <section className="mb-10" id={id}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services
          .filter((s) => s.category === category)
          .map((s) => (
            <div
              key={s.id}
              className="bg-white shadow-md rounded overflow-hidden cursor-pointer hover:shadow-xl transition"
              onClick={() => openModal(s)}
            >
              <div className="relative h-48">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{s.description}</p>
                <button className="mt-3 text-yellow-400 font-semibold">คลิกดูเพิ่มเติม</button>
              </div>
            </div>
          ))}
      </div>
    </section>
  )

  return (
    <main className="bg-white min-h-screen">
      <div className="px-4 py-10 max-w-7xl mx-auto">
        {renderSection('งานติดตั้ง', 'install')}
        {renderSection('งานซ่อมแซม', 'repair')}

        {selectedService && (
          <ServiceModal
            service={{ ...selectedService, fullText: selectedService.description }}
            onClose={closeModal}
          />
        )}
      </div>
    </main>
  )
}