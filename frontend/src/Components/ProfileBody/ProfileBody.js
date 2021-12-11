import React from 'react'
import AboutYou from './AboutYou/AboutYou'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import './ProfileBody.css'
import RentedItems from './RentedItems/RentedItems'

function ProfileBody() {
    return (
        <div className='ProfileBody'>
            <PersonalInfo/>
            <AboutYou/>
            <RentedItems/>
             
        </div>
    )
}

export default ProfileBody
