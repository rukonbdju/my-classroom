import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const PostModal = ({ id,setModal,setPosts}) => {
  const {user}=useContext(AuthContext)
  const [postContent, setPostContent] = useState("");
  const handleWritePost = (e) => {
    e.preventDefault();
    setPostContent(e.target.value);
  };
  const handleCreatePost = async (e) => {
    e.preventDefault();
    const uid=user.uid;
    const name=user.displayName;
    const email=user.email;
    const classId=id;
    const timestamps=new Date().toString()
    const data={uid,name,email,postContent,classId,timestamps}
    console.log(data)
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result=await response.json()
    if(result.acknowledged){
      setPosts(prevData => [data, ...prevData]);
      setModal(false)

    }
    console.log(result)
  };
  return (
    <div className="relative bg-slate-100 rounded-xl p-4 w-2/5">
      <span
        onClick={() => setModal(false)}
        className="absolute top-2 right-2 cursor-pointer inline-block p-2 rounded-xl font-bold bg-slate-200 hover:bg-slate-300"
      >
        Close
      </span>
      <h2 className="text-2xl text-center font-bold mb-4">Create Post</h2>
      <hr />
      <div className="flex flex-row gap-4 items-center">
        <div className="w-12 h-12">
          <img
            className="rounded-full"
            src="https://lh3.googleusercontent.com/ogw/AOLn63GZwhqKE4la-5zv0ZPxZOJqUC7y1Mg5DBkQNqcM=s32-c-mo"
            width={"100%"}
            alt=""
          />
        </div>
        <div>
          <span className="text-xl font-bold">Rukon</span>
        </div>
      </div>
      <div className="my-6">
        <form onSubmit={handleCreatePost}>
          <textarea
            onChange={handleWritePost}
            className="border-0 w-full max-h-max resize-none outline-none p-2 bg-slate-200 rounded-lg"
            value={postContent}
            name="post"
            rows={10}
            placeholder="Write your post"
          ></textarea>
          <button
            type="submit"
            className="p-2 rounded-md shadow-lg w-full bg-blue-700 text-slate-50 font-bold uppercase"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
