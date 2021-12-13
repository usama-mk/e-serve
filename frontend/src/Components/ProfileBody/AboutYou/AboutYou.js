import React, { useState } from 'react'
import {IoMdAddCircleOutline} from 'react-icons/io'
import './AboutYou.css'

function AboutYou() {
    const [about, setAbout]= useState("Nothing Added Yet")
    const [isAboutYou, setIsAboutYou]= useState(false)
    return (
        <div className='AboutYou profileInfoCards'>
            <div className="AYHeader flex sb">
                <div className="AYHText PICsHeader">
                    About You
                </div>
                <div onClick={()=> setIsAboutYou(!isAboutYou)} className="AYHAdd pointer">
                  <IoMdAddCircleOutline color='blue' size={30} />
                </div>
            </div>

            <div className="AYInput">
               {
                   isAboutYou?
                   <input type="text" value={about} onChange={(e)=> setAbout(e.target.value)} />
                   :
                   <div className="PICsDetails">
                       {about}
                   </div>
               }
            </div>
        </div>
    )
}

export default AboutYou
