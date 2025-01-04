import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-500">
          BlogLogo
        </Link>

        {/* Navigation */}
        <nav>
          <Link href="/blogs" className="text-gray-600 hover:text-indigo-500 font-medium text-lg">
            
              Blogs
            
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
