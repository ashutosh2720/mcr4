import React, { useState } from "react";
import { forumData } from "../db/ForumData";
import PostCard from "./PostCard";


const Mid = () => {
    const [post, setPost] = useState([])
    const [isBookMark, setIsBookMark] = useState(false)
    console.log(forumData);


    return (
        <div className="w-[90%]">

            {forumData.posts.map((postData) => (

                <PostCard postData={postData} />
            ))}
        </div>
    );
};

export default Mid;
