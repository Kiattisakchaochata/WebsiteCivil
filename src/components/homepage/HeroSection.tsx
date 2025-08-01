'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt="hero"
        width={1200}
        height={600}
        className="object-cover w-full h-full"
        priority
      />

      {/* ชั้น Overlay สีดำบางๆ */}
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        {/* กล่องข้อความ + พื้นหลังข้อความ */}
        <div className="px-6 py-4 rounded-md text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug drop-shadow">
            งานติดตั้งพื้น ซ่อมแซมพื้น และผนัง<br /><br />ไว้ใจซีวิล
          </h1>
        </div>
      </div>
    </section>
  );
}