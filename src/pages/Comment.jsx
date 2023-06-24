import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import { useParams } from "react-router-dom";
import { forumData } from "../db/ForumData";
import PostCard from "../components/PostCard";
import RightSideBar from "../components/RightSideBar";

const Comment = () => {

    const { postId } = useParams();
    const postData = forumData.posts.find((item) => item.postId === postId);
    console.log(postId);
    return (
        <div className="flex justify-center items-center gap">
            <div className="left w-[20%]">
                {" "}
                <LeftSidebar />
            </div>
            <div className="mid mt-1 w-[60%]">
                {" "}
                <PostCard postData={postData} />
                <div className="comment shadow-md p-5" >
                    {
                        postData.comments.map((data) =>
                            <div className="data ">
                                <div className="user flex gap-2">
                                    <p className="font-bold">{data.name}</p><p> @{data.username}</p><p>{data.createdAt}</p>
                                </div>
                                <div className="reply">
                                    <p>replying to : {forumData.username}</p>
                                    <p className="text-xl font-bold">{data.comment}</p>
                                </div>
                            </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Comment;
