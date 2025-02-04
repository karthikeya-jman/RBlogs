import React from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { LuEye } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";
import { RiEditCircleFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router";

const InfoCard = ({ id }) => {
  const data = JSON.parse(localStorage.getItem("posts"));

  console.log(id);

  const post = data.find((p) => p.id == id);
  return (
    <div className="flex-3  h-full overflow-auto bg-white rounded-lg p-7 m-3 text-5xl">
      <div
        className="flex items-center gap-1 p-1 px-2 bg-blue-500/[20%] text-blue-500 rounded-lg place-content-center"
        // onClick={()=>sharePost()}
      >
        <FaShare className="text-2xl" />
        <p className="text-lg">Share</p>
      </div>
      <div className="flex items-center mt-5 gap-5">
        <div className="flex flex-1 p-1 px-2 gap-2 bg-rose-500/[10%]  rounded-lg  text-rose-500">
          {/* <GoHeartFill className="text-6xl" /> */}
          <GoHeart className="text-6xl" />
          <p>{post.likes}</p>
        </div>

        <div className="flex flex-1 p-1 px-2 gap-2 bg-green-500/[10%]  rounded-lg  text-green-500">
          {/* <GoHeartFill className="text-6xl" /> */}
          <LuEye className="text-6xl" />
          <p>{post.views}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
