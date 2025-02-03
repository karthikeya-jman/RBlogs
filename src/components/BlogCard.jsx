import React from "react";
import { GoHeart } from "react-icons/go";
import { LuEye } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";
import { RiEditCircleFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";

const BlogCard = ({ data,blogs,setBlogs}) => {

  function deletePost(postId){
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPOsts = posts.filter((p)=>p.id!=postId);
    localStorage.setItem("posts",JSON.stringify(updatedPOsts));
    setBlogs(updatedPOsts)
  }

  return (
    <div className="flex bg-white w-full mx-20 gap-5 rounded-lg shadow-md">
      <img src={data.imageUrl} alt="" className="rounded-l-lg w-110  object-cover" />
      <div className="flex items-center justify-between w-full">

      <div className="flex flex-col">
        <span className="text-2xl font-medium line-clamp-1 overflow-hidden text-ellipsis">{data.title}</span>
        <p className="text-gray-600 line-clamp-2 overflow-hidden text-ellipsis">
          {data.content}
        </p>

        <div className="flex items-center gap-10 mt-10">
          <div className="flex items-center gap-2 hover:text-blue-500 hover:bg-blue-500/[20%] p-1 rounded-lg">
            <LuEye className=" text-2xl" />
            <p className="text-xl">{data.views}</p>
          </div>
          <div className="flex items-center gap-2 hover:text-rose-500 hover:bg-rose-500/[20%] p-1 rounded-lg">
            <GoHeart className=" text-2xl" />
            <p className="text-xl">{data.likes}</p>
          </div>
          <div className="flex items-center gap-2 hover:text-emerald-500 hover:bg-emerald-500/[20%] p-1 rounded-lg">
            <FaRegMessage className=" text-2xl " />
            <p className="text-xl">{data.comments.length}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-10 mx-10 py-10">
        <div className="flex items-center gap-1 p-1 bg-rose-500/[20%] text-rose-500 rounded-lg" 
        onClick={()=> deletePost(data.id)}>
          <BsFillTrash3Fill className="text-2xl" />
          <p className="text-lg">Delete</p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-emerald-500/[20%] text-emerald-500 rounded-lg">
          <RiEditCircleFill className="text-2xl" />
          <p className="text-lg">Edit</p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-blue-500/[20%] text-blue-500 rounded-lg">
          <FaShare className="text-2xl" />
          <p className="text-lg">Share</p>
        </div>


      </div>
      </div>
    </div>
  );
};

export default BlogCard;
