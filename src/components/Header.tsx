'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation'
const Header = () => {
    const pathname  = usePathname()
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-500">
          Blogwebsite
        </Link>

        {/* Navigation */}
        <nav>
          <Link href="/blogs" className={`${pathname === '/blogs'? 'text-indigo-600 font-bold' : 'text-gray-600 font-medium' } hover:text-indigo-500 text-lg`}>
            
              Blogs
            
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
