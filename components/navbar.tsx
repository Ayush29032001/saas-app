import MobileSideBar from '@/components/mobile-sidebar';
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <div className='flex items-center p-4'>
      <MobileSideBar />
      <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
}
