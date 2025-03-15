import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

const TopMenu = () => {
  return (
    <div className="h-[100px] bg-white text-white fixed top-0 left-0 right-0 z-50 border-t-[1px] border-gray-600 border-b-[1px] border-gray-600 flex flex-row-reverse">
        <Image src="/img/logo.png" alt="logo" width = {0} height = {0} sizes = '100vh' className = 'h-full w-auto'/>
        <TopMenuItem title = 'Booking' pageRef = '/booking' />
    </div>
  );
};

export default TopMenu;