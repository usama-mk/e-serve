import React from 'react'
import AboutYou from './AboutYou/AboutYou'
import Giveaways from './Giveaways/Giveaways'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import './ProfileBody.css'
import RentedItems from './RentedItems/RentedItems'
import ServicesAvailed from './ServicesAvailed/ServicesAvailed'

function ProfileBody() {
    const RentAnyBtn=()=>{
        return(
            <div className="rentAnyBtn pointer">
                    Rent Anthing
                </div>
        )
    }
    return (
        <div className='ProfileBody flex'>
           <div className="PBLeft">
           <PersonalInfo/>
            <AboutYou/>
            <RentedItems/>
            <Giveaways/>
            <ServicesAvailed/>
           </div>

           <div className="PBRight">
                <RentAnyBtn/>
           </div>
             
        </div>
    )
}

export default ProfileBody
