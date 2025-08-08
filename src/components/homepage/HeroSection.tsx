'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      {/* วิดีโอแทนรูป */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/civil.mp4" type="video/mp4" />
        {/* รองรับฟอร์แมตอื่นถ้ามี เช่น webm */}
        {/* <source src="/videos/civil.webm" type="video/webm" /> */}
      </video>

      {/* ชั้น Overlay สีดำบางๆ */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="px-6 py-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug drop-shadow mb-6">
            งานติดตั้งพื้น ซ่อมแซมพื้น และผนัง<br /><br />ไว้ใจซีวิล
          </h1>

          {/* ปุ่มติดต่อเรา */}
          <Link
            href="https://m.me/715352691654101"
            className="inline-block border border-white !text-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </section>
  );
}