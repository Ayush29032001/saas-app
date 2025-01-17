import Navbar from '@/components/navbar';
import SideBar from '@/components/sidebar';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 '>
        <div>
          <SideBar />
        </div>
      </div>
      <main className='md:pl-72'>
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
}
