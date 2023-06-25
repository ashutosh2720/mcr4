import React, { useState } from "react";
import { forumData } from "../db/ForumData";
import PostCard from "./PostCard";
import { useGlobalPosts } from "../contexts/forum-context";


const Mid = () => {
    const { sortedPosts } = useGlobalPosts()
    console.log(forumData);


    return (
        <div className="w-[90%]">

            {sortedPosts.map((postData) => (

                <PostCard postData={postData} />
            ))}
        </div>
    );
};

export default Mid;
