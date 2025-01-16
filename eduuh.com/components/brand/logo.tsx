import { FireIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="text-2xl font-bold flex items-center">
        <FireIcon className="h-6 text-[#031e79] dark:text-[#c4d1fc] mr-2" />
        <span className="text-[#031e79] dark:text-[#c4d1fc]">Eduuh</span>
      </div>
    </Link>
  );
};

export default Logo;
