import React, { useState } from 'react'
import './FeaturedPost.css'
import taylorImage from '../../assets/images/taylorImage.png'
import showMoreIcon from '../../assets/images/showMoreIcon.png'
import threeDots from '../../assets/images/threeDots.png'
import pauline from '../../assets/images/pauline.png'
import kay from '../../assets/images/kay.png'


function FeaturedPost() {
    const [postsFeatured, setPostsFeatured]= useState([
    {
        name: "Taylor Rosa",
        profession: 'Accountant',
        previewImage: taylorImage
    },
    {
        name: "Pauline Grahov",
        profession: 'Logo Designer',
        previewImage: pauline
    },
    {
        name: "Jermaine Kay",
        profession: 'Web Designer',
        previewImage: kay
    },

])

 

   
    
    return (
        <div className="FeaturedPost">
            <div style={{textAlign: 'end'}} className="postThree">
                <img src={threeDots} width="18"
                height="4" alt="" />
            </div>
            <div style={{marginBottom: '20px'}} className="addText">
                Featured Posts
            </div>

           {
               postsFeatured.map((account, key)=>{
                   return(
                       <div className="account">
                            <AccountPreview name={account.name} profession={account.profession} profilePic={account.previewImage}  />
                        {   
                            key===postsFeatured.length-1?<div style={{marginTop: '30px'}}></div>:<div className="previewSeparator">
                            <hr />
                        </div>
                        }
                       </div>
                   )
               })
           }

           <ViewAll/>

        </div>
    )
}

export const ContactPreviewBtn=()=>{
    return(
        <div className="contactPreviewBtn RepostButton">
            Contact
        </div>
    )
}

export const AccountPreview=({profilePic, name, profession})=>{
    return(
        <div className="AccountPreview flex ac sb">
            <div className="APLeft flex ac">
                <div className="previewProfileImage">
                    <img src={profilePic} width='60' height='58' alt="" />
                </div>
                
                <div className="previewProfileDetails">
                    <div className="previewName">
                        {name}
                    </div>

                    <div className="previewProfession">
                        {profession}
                    </div>
                </div>
            </div>

            <div className="APRight">
                <ContactPreviewBtn/>
            </div>
           
        </div>
    )
}

export const ViewAll=()=>{
    return(
        <div className="viewAllWrapper flex jc">
           <div className="viewAllButton">
               <div className="viewAllText">
                   View All
               </div>
               <div className="arrowDown flex jc">
                <img src={showMoreIcon} width= '13' height='8' alt="" />
               </div>
           </div>
       </div>
    )
}

export default FeaturedPost
