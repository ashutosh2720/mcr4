import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import Mid from '../components/Mid'
import RightSideBar from '../components/RightSideBar'
import { forumData } from '../db/ForumData'

const Home = () => {
    return (
        <div className='h-full w-full flex  justify-around  items-center'>
            <div className="left w-[30%]"> <LeftSidebar /></div>
            <div className="mid mt-1"><Mid /></div>
            <div className="right w-[20%] sticky top-1"> <RightSideBar /></div>
        </div>
    )
}

export default Home
