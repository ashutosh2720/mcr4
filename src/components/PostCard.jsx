import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useNavigate } from "react-router-dom";
import { useGlobalPosts } from '../contexts/forum-context';


const PostCard = ({ postData }) => {
    const { addToBookmarks, upvoteFunc, downvoteFunc } = useGlobalPosts()

    const navigate = useNavigate();
    return (
        <div className="data shadow-md border p-2 rounded-md flex flex-col">
            <div className="votes flex flex-col cursor-pointer">
                <div className="upvote" onClick={() => upvoteFunc(postData.postId)}>
                    <ArrowCircleUpIcon />
                </div>
                {postData.upvotes - postData.downvotes}
                <div className="downvote cursor-pointer" onClick={() => downvoteFunc(postData.postId)}>
                    <ArrowCircleDownIcon />
                </div>

            </div>
            <p className="text-gray-600">posted by : {postData.name}</p>
            <h1 className="text-xl font-bold">{postData.post}</h1>
            <div className="tags flex gap-2 text-[10px] text-cyan-500 font-bold">
                {postData.tags.map((tag) => (
                    <div className="tag">
                        <p className="bg-blue-200 rounded-full p-1">{tag}</p>
                    </div>
                ))}
            </div>
            <p className="mt-10">{postData.postDescription}</p>
            <br />
            <hr />
            <div className="icons flex  justify-around items-center gap-10 mt-5">
                <div className="comments cursor-pointer " onClick={() => navigate(`/comment/${postData.postId}`)}>
                    <QuestionAnswerOutlinedIcon />
                </div>
                <div className="share cursor-pointer">
                    <ShareIcon />
                </div>
                <div className="bookmark cursor-pointer  "  >
                    {
                        postData.isBookmarked ?
                            <BookmarkIcon className={'text-2xl cursor-pointer'} onClick={() => addToBookmarks(postData.postId)} /> :
                            <BookmarkBorderIcon className={'text-2xl cursor-pointer'} onClick={() => addToBookmarks(postData.postId)} />
                    }
                </div>
            </div>
        </div>
    )
}

export default PostCard
