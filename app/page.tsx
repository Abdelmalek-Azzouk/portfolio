'use client'
// The 'use client' directive is necessary because we are changing the default server component
// to a client component for simplicity here.

import Image from 'next/image';

// We import the global CSS from the layout, but we don't need to do anything with it here.
// import styles from './page.module.css' 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        {/*
          This is the central part of the page.
          We use Tailwind CSS classes (like 'text-6xl', 'font-extrabold', 'text-indigo-600')
          to make the "HELLO!" message big and obvious.
        */}
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-white pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 p-6 shadow-xl">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-indigo-600 animate-pulse tracking-widest">
            HELLO!
          </h1>
        </div>

        {/* You can remove all the other boilerplate code that was here originally 
          if you want a truly blank slate. For now, we'll keep the main structure.
        */}

      </div>
    </main>
  )
}
