'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Select from 'react-select';

interface Post {
    id: number;
    label: string;
    value: string;
}

const Content = () => {
    const [datas, setDatas] = useState<any>([])
    const [userSelect, setUserSelect] = useState<any>("")
    const [isShow, setIsShow] = useState(false)

    const router = useRouter();

    const getPostAPI = async () => {
        const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc')
        const dataBlog = await res.json()

        const results = dataBlog.map((result: any) => {
            return {
                label: result.title,
                value: result.body,
                id: result.id
            }
        })
        setDatas(results)
    }
    
  
  
    const handleChange = ({label, value, id}: Post) => {
        setUserSelect({label, value, id})
    }

    const handleSubmit = () => {
        setIsShow(state => !state)
    }

    useEffect(() => {
        getPostAPI()
    }, [])
    

    return (
        <div className="App">
            {
                !userSelect ? <button className='text-white p-2 my-5 mx-auto border border-solid border-gray-600 rounded-md bg-gray-500 cursor-not-allowed flex lg:my-5 lg:mx-345' disabled={!userSelect} onClick={handleSubmit}>{isShow ? "Show All Contents" : "Show Selected Content"}</button> : <button className='bg-blue-500 hover:bg-blue-700 text-white p-2 my-5 mx-auto border border-solid border-blue-500 rounded-md cursor-pointer flex lg:my-5 lg:mx-345' onClick={handleSubmit}>{isShow ? "Show All Contents" : "Show Selected Content"}</button>
            }
            <Select className='mb-11 text-center' placeholder='Search or select a title content' options={datas} onChange={(event:any) => handleChange(event)}></Select>
            {
                isShow ? 
                <div className="max-w-screen-xl mx-auto w-999" key={userSelect.id}>
                    <div className="border border-solid border-black shadow shadow-slate-500 max-w-xl my-8 mx-auto rounded-md">
                        <div className='text-center p-4 bg-blue-500 text-white'>{isShow ? `Content Number ${userSelect.id}` : ""}</div>
                        <span className='p-4 leading-8 cursor-pointer hover:underline' onClick={() => router.push(`/content/${userSelect.id}`)}><strong>Title : {isShow ? userSelect.label : ""}</strong></span>
                        <hr></hr>
                        <p className='px-4 py-2'>{isShow ? userSelect.value : ""}</p>
                    </div>
                </div> :
                <div>
                    {
                        datas.map((data:any) => {
                            return(
                                <div className="max-w-screen-xl mx-auto w-999" key={data.id}>
                                    <div className="border border-solid border-black shadow shadow-slate-500 max-w-xl my-8 mx-auto rounded-md">
                                        <div className='text-center p-4 bg-blue-500 text-white' >Content Number {data.id}</div>
                                        <span className='p-4 leading-8 cursor-pointer hover:underline' onClick={() => router.push(`/content/${data.id}`)}><strong>Title : {data.label}</strong></span>
                                        <hr></hr>
                                        <p className='px-4 py-2'>{data.value}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Content;
