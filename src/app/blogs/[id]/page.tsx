import SingleBlog from '@/components/BlogDetail';
import React from 'react'

const BlogDetail = async({params}:{params:Promise<{id:string}>}) => {
  try {
    const response = await fetch(`https://milestone3-blog-puce.vercel.app/api/blog/${(await params).id}`)
    if (!response.ok) {
      throw new Error("Failed to fetch Blog no: "+(await params).id);
      
    }
    const singleBlog = await response.json()
    if (singleBlog.error) {
      throw new Error(singleBlog.msg);
      
    }
    return (
      <div className="container mx-auto px-5 py-10">
        <SingleBlog singleBlog={singleBlog.singleBlog}/>
      </div>
    )
    
  } catch (error) {
    throw error
  }
}

export default BlogDetail
