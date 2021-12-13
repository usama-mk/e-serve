import React, { useState } from 'react'
import {AiFillGoogleCircle, AiFillApple} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import './UDProfileInfo.css'


function UDProfileInfo() {
    const [name, setName]= useState("Usama")
    const [email, setEmail]= useState("usama@gmail.com")
    const [phoneNumber, setPhoneNumber]= useState("03348933699")
    const [completedPercent, setcompletedPercent]= useState(80)
    return (
        <div className=' UDProfileInfo PersonalInfo shadow-tail'>
        <div className="PIHeader flex sb">
            <div className="PIHText PICsHeader">
                My Dashboard
            </div>
            <div className="flex">
               <AiFillGoogleCircle size={30} />
               <FaFacebookF color='blue' size={30} />
               <AiFillApple color='black' size={30} />
            </div>
        </div>

        <div className="PIBody flex">
            <div className="PIImg">
               <img src="https://miro.medium.com/max/1200/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg" alt="profile picture" />
            </div>
            <div className="PIDetails">
            <div className="PIName">
                {name}
            </div>
            <div className="PIEmail">
                {email}
            </div>
            <div className="PIph PIEmail">
                {phoneNumber}
            </div>
            </div>

        </div>
        <div className="profileStatus">
        <div class="progress">
            <div class="progress-bar" role="progressbar" style={{width: `${completedPercent}%`}} aria-valuenow={completedPercent} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        <div style={{color: completedPercent>=80?'green':completedPercent>=50?'orange':completedPercent>0 && completedPercent<50?'red': ''}} className="completedpercent">
            {completedPercent}% completed!
        </div>

    </div>
    )
}

export default UDProfileInfo
