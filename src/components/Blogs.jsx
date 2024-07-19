import React from 'react'
import blog from "../images/blog.jpg";
import blog2 from "../images/blog2.jpg";
import p from "../images/p.jpg";

const Blogs = () => {
  const myBlogs = [
    {
      id:1,
      title: "How to choose perfect vr",
      subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      published: "jone 20 2024",
      image: blog2
    },
    {
      id:2,
      title: "How to choose perfect vr",
      subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      published: "jone 20 2024",
      image: blog
    },
    {
      id:3,
      title: "How to choose perfect vr",
      subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      published: "jone 20 2024",
      image: p
    }
  ]
  return (
    <div className='container my-14 md:my-20  after:'>
        <div className='text-center'>
            <h1 className='h1-after-line  inline-block relative text-3xl font-bold '> recent news</h1>
        </div> 
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        py-4 my-5 '>
        {
          myBlogs.map((data)=>(
            <div className='p-3' >
              <div className="image rounded-t-md overflow-hidden">
                <img src={data.image} alt="" className=' w-full sm:w-auto sm:h-[250px] object-cover
                hover:scale-105 duration-500' />
              </div>
              <div className="text">
                <p className='text-gray-500 font-semibold'>{data.published}</p>
                <h1 className='font-bold text-2xl dark:text-gray-300'> {data.title}</h1>
                <p>{data.subtitle}</p>
              </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Blogs