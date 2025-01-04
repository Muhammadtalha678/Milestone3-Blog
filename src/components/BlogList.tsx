import React from 'react'
import Image from 'next/image'
import { Blog } from '@/interfaces/Blog'
import Link from 'next/link';
// import Link from 'next/link';
const BlogList = ({ Blogs }: { Blogs: Blog[] }) => {
    console.log(Blogs);
    
    return (
        
          Blogs.map((blog) => (
           <div key={blog.id} className="border rounded-lg overflow-hidden shadow-md">
  <Image
    src={blog.image}
    alt={blog.title}
    className="w-full h-48 object-cover"
    width={300}
    height={300}
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
    <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
    <p className="text-gray-500 text-xs mt-4">
      By {blog.author} - {new Date(blog.publishDate).toDateString()}
    </p>
    <div className="mt-4">
      <Link href={`/blogs/${blog.id}`} className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
        Learn More
      </Link>
    </div>
  </div>
            </div>

          ))
  )
}

export default BlogList
