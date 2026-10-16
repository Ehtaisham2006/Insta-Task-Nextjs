"use client"
import React, { useRef } from 'react'
import Stories from './Stories'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import Post from './Post'

const Main = () => {
  const storiesRef = useRef(null);

  const scrollStories = (direction) => {
    if (!storiesRef.current) return;
    storiesRef.current.scrollBy({
      left: direction * 300,
      behavior: 'smooth',
    });
  };

  const storiesData = [
    { id: 1, path: "/assests/profile/image1.jpg", name: "C.Ronaldo" },
    { id: 2, path: "/assests/profile/image2.jpg", name: "A.Iqbal" },
    { id: 3, path: "/assests/profile/image3.jpg", name: "Imran Khan" },
    { id: 4, path: "/assests/profile/image4.jpg", name: "Virat Kohli" },
    { id: 5, path: "/assests/profile/image5.jpg", name: "Lionel Messi" },
    { id: 6, path: "/assests/profile/image6.jpg", name: "M.A.Jinnah" },
    { id: 7, path: "/assests/profile/image7.jpg", name: "Steve Smith" },
    { id: 8, path: "/assests/profile/image8.jpg", name: "Wasim Akram" },
  ];

  return (
    <main className='flex flex-col items-center gap-6 py-6 bg-gray-100 min-h-screen text-gray-900'>
      <section className="relative w-full max-w-[470px]">
        <div 
          ref={storiesRef} 
          className="flex items-center gap-4 overflow-x-auto rounded-xl border border-gray-200 bg-white p-4 shadow-sm scrollbar-hide"
        >
          {storiesData.map((item) => (
            <div key={item.id} className="flex shrink-0 flex-col items-center gap-1.5">
              <Stories path={item.path} />
              <span className="text-xs text-gray-600 truncate w-16 text-center font-medium">{item.name}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollStories(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-700 shadow-md border border-gray-200 hover:bg-white"
        >
          <FaChevronLeft size={12} />
        </button>

        <button
          type="button"
          onClick={() => scrollStories(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-700 shadow-md border border-gray-200 hover:bg-white"
        >
          <FaChevronRight size={12} />
        </button>
      </section>

     <Post />
    </main>
  )
}

export default Main