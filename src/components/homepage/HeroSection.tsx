'use client';

import Image from 'next/image';
import Link from 'next/link';

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
      <div className="absolute inset-0 bg-black/0 flex items-center justify-center">
        <div className="px-6 py-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug drop-shadow mb-6">
            งานติดตั้งพื้น ซ่อมแซมพื้น และผนัง<br /><br />ไว้ใจซีวิล
          </h1>

          {/* ปุ่มติดต่อเรา */}
          <Link
            href="https://m.me/715352691654101"
            className="inline-block border border-white !text-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition duration-300"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </section>
  );
}