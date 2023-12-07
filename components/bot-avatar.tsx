import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';

export const BotAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar className='h-8 w-8'>
      <AvatarImage src={'/logo.png'} className='p-1' />;
      {/* <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback> */}
    </Avatar>
  );
};
