import React, { useState } from 'react'
import './PersonalInfo.css'
import {FaUserEdit} from 'react-icons/fa'

function PersonalInfo() {
    const [name, setName]= useState("Usama")
    const [email, setEmail]= useState("usama@gmail.com")
    const [phoneNumber, setPhoneNumber]= useState("03348933699")

    return (
        <div className='PersonalInfo shadow-tail'>
            <div className="PIHeader flex sb">
                <div className="PIHText PICsHeader">
                    Personal Information
                </div>
                <div className="PIEdit">
                   <FaUserEdit color='blue' size={30} />
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
        </div>
    )
}

export default PersonalInfo
