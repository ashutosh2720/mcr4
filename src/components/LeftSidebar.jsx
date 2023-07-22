import React from "react";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import IosShareIcon from "@mui/icons-material/IosShare";
import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {
    const navigate = useNavigate();
    return (
        <>
            {" "}
            <div className="left w-[10%] flex justify-start item-start pl-10 flex-col gap-5  sticky top-1 ">
                <div className="home flex justify-start item-start gap-3 hover:bg-cyan-900 transition ease-in-out delay-15  rounded p- cursor-pointer  hover:text-black  " onClick={() => navigate('/')}>
                    <HomeOutlinedIcon
                        fontSize="large"
                        className="cursor-pointer text-black-400"
                    />
                    <div className="name flex justify-center item-center relative top-1 text-md">
                        <p>Home</p>
                    </div>
                </div>

                <div className="home flex justify-start item-start gap-3 hover:bg-cyan-900 transition ease-in-out delay-15  rounded p-1 cursor-pointer  hover:text-black" onClick={() => navigate("/")}>
                    <ExploreOutlinedIcon

                        fontSize="large"
                        className="cursor-pointer text-black-400"
                    />
                    <div className="name flex justify-center item-center relative top-1 text-md">
                        <p>Explore</p>
                    </div>
                </div>

                <div className="home flex justify-start item-center gap-3 hover:bg-cyan-900 transition ease-in-out delay-15  rounded p-1 cursor-pointer  hover:text-black" onClick={() => navigate("/")}>
                    <BookmarkBorderOutlinedIcon

                        fontSize="large"
                        className="cursor-pointer text-black-400"
                    />
                    <div className="name flex justify-center item-center relative top-1 text-md">
                        <p>Bookmark</p>
                    </div>
                </div>

                <div className="home flex justify-start item-center gap-3 hover:bg-cyan-900 transition ease-in-out delay-15  rounded p-1 cursor-pointer  hover:text-black" onClick={() => navigate("/")}>
                    <FavoriteIcon

                        fontSize="large"
                        className="cursor-pointer text-black-400"
                    />
                    <div className="name flex justify-center item-center relative top-1 text-md">
                        <p>Liked</p>
                    </div>
                </div>

                <div className="home flex justify-start item-center gap-3  cursor-pointer  hover:text-black">
                    <h1 className="w-full rounded text-center p-1  bg-cyan-700 text-white">

                    </h1>
                </div>
            </div>
        </>
    );
};

export default LeftSidebar;
