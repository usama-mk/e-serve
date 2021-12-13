import React from 'react'
import FeaturedPost from '../FeaturedPost/FeaturedPost'
import News from '../News/News'
import MyDashboardPosts from './MyDashboardPosts/MyDashboardPosts'
import UDOperations from './UDOperations/UDOperations'
import UDProfileInfo from './UDProfileInfo/UDProfileInfo'
import './UserDashboardBody.css'

function UserDashboardBody() {

    const UDHomeBtn=()=>{
        return(
            <div className="UDHomeBtn">
                Go to Home
            </div>
        )
    }
    return (
        <div className='UserDashboardBody flex'>
            <div className="UDLeft">
            <UDProfileInfo/>
            <UDOperations/>
            <MyDashboardPosts postsType="My Posts"/>
            <MyDashboardPosts postsType="My Giveaway pending request"/>
            </div>

            <div className="UDRight">
            <div style={{display: 'flex', width: '100%', justifyContent: 'center'}} className="UDBtnWrapper">
            <UDHomeBtn/>
            </div>
            <div className="UDRSide flex column ac">
            <FeaturedPost/>
            <News/>
            </div>
            </div>
        </div>
    )
}

export default UserDashboardBody
