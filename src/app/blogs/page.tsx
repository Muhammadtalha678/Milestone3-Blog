import BlogList from '@/components/BlogList'
import React from 'react'

const Blogs =async () => {
    try {
     const response = await fetch('https://milestone3-blog-puce.vercel.app/api/blog')
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const blogs = await response.json()
        return (
    <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogList Blogs={blogs.blogData}/>
        </div>
    </section>
    )
    } catch (error) {
        throw error
    }
}

export default Blogs
