import Image from 'next/image';

export const Loader = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-y-4'>
      <div className='w-10 h-10 relative animate-spin'>
        <Image src={'/logo.png'} alt='logo' fill />
      </div>
      <p className='text-sm text-muted-foreground'>Geni is thinking...</p>
    </div>
  );
};
