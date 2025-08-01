'use client';

import Image from 'next/image';

const projectImages = [
  { src: '/images/gallery1.png', title: 'โครงการ A' },
  { src: '/images/gallery2.png', title: 'โครงการ B' },
  { src: '/images/gallery3.png', title: 'โครงการ C' },
  { src: '/images/gallery4.png', title: 'โครงการ D' },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1F2560] mb-8 text-center">ผลงานของเรา</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectImages.map((project, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white"
            >
              <Image
                src={project.src}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}