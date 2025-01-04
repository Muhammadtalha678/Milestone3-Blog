'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import { Blog } from '@/interfaces/Blog'
const SingleBlog = ({ singleBlog }: { singleBlog: Blog }) => {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<string[]>([])
  
  const onCommentSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(comment.trim());
    
    if (comment.trim() !== '') {
      setComments([...comments, comment])
      setComment('')
    }

  }
  return (
    <div>
      {/* Blog Image */}
      <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-md mb-8">
        <Image
          src={singleBlog.image}
          alt={singleBlog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Blog Title and Meta */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{singleBlog.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        By {singleBlog.author} - {new Date(singleBlog.publishDate).toDateString()}
      </p>

      {/* Blog Content */}
      <div className="text-gray-700 text-lg leading-relaxed mb-12">
        {singleBlog.description}
      </div>

      {/* Comment Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form className="mb-6" onSubmit={onCommentSubmit}>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            rows={4}
            placeholder="Write a comment..." onChange={(e) => { setComment(e.target.value) }} 
            value={comment} 
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          >
            Post Comment
          </button>
        </form>
        <div>
          {/* Example Comment */}
          {
            comments.length > 0 ?
            comments.map((e: string,index:number) => (
              <div className="border-b pb-4 mb-4" key={index}>
              <p className="text-gray-600">
              <span className="font-semibold">Anonymus:</span> 
              {e}
            </p>
          </div>
            ))
              : <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          }
          
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
