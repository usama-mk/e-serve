import React from 'react'
import { FaEdit } from 'react-icons/fa'
import PostPreview from '../PostPreview/PostPreview'
import './MyDashboardPosts.css'

function MyDashboardPosts({postsType}) {

    const SeeAllButton=({fun})=>{
        return(
            <div onClick={fun} className="seeAllButton">
                See All
            </div>
        )
    }

    const seeAllPosts=()=>{

    }
    return (
        <div className='MyDashboardPosts shadow-tail'>
            <div style={{width: '100%'}} className="DPHeader flex sb">
                <div className="DPHText">
                   {postsType}
                </div>
                <div className="DPHEdit pointer">
                    <FaEdit size={20} />
                </div>
            </div>
            
            <PostPreview/>
            <PostPreview/>
            <PostPreview/>
            <div className="seeAllWrapper flex jc">
            <SeeAllButton fun={seeAllPosts} />
            </div>
        </div>
    )
}

export default MyDashboardPosts
