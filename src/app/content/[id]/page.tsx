'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";


interface User {
  id: number;
  title: string;
  body: string;
}

const DetailContent = () => {
    const [post, setPost] = useState<any>({})
    const { id } = useParams()

    const router = useRouter();

    const getPostId = async () => {
        const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
        const dataId: User = await res.json()
        
        setPost(dataId)
    }
    
    useEffect(() => {
        getPostId()
    }, [])
    
    
      
    return (
        <div className="max-w-screen-xl mx-auto w-999" key={post.id}>
            <p className="mt-11 mx-auto mb-5"><strong>Content Number: {post.id}</strong></p>
            <div className="border border-solid border-black shadow shadow-slate-500 max-w-6xl my-5 rounded-md">
                <div className="text-white p-5 border-b border-solid border-black bg-blue-500 capitalize font-bold text-xl">{post.title}</div>
                <p className="text-base px-5 py-2">{post.body}</p>
            </div>
            <span className='p-4 leading-8 cursor-pointer hover:underline' onClick={() => router.push(`/content`)}><strong>{`>> Back To Homepage`}</strong></span>
        </div>
    )
  
}


export default DetailContent;