import React from "react";

const Post = ({ post }) => {
    const content=post.postContent;
    const lineContent=content.split('\n')
    console.log(lineContent)
  return (
    <div className="my-4 bg-slate-200 p-4 rounded-lg">
      <div className="flex justify-start gap-3 mb-6">
        <div className="w-12 h-12 p-4 rounded-full flex  bg-blue-700">
          <span className="inline-block text-slate-50 font-bold">
            {post.name.slice(0, 1)}
          </span>
        </div>
        <div>
          <p className="text-md font-bold">{post.name}</p>
          <p className="text-sm">{post.email}</p>
          <div className="my-5">
          {lineContent.map((text,index)=><p key={index}>{text}</p>)}
          </div>
        </div>
      </div>
      <div>
        <input
          className=" bg-slate-100 rounded-full outline-0 px-4 py-2 w-full"
          placeholder="Type comments"
          type="text"
          name="comment"
        />
      </div>
    </div>
  );
};

export default Post;
