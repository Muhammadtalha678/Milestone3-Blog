import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center   h-screen">
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:mx-64 md:mx-32 sm:mx-16 mx-8 font-bold">
        Milestone 3 dynamic blog with multiple posts using Next.js routing.
        Implement a comments section using React state.
        <span className='bg-slate-300 '>Navigate to Blogs page to see functionality.</span>
      </h1>
      <Link href="/" className='mt-10 bg-indigo-400 p-2 rounded-md text-white'>
        Blogs
      </Link>
    </div>
  );
}
