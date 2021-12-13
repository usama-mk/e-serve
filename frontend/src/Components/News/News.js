import React from 'react'
import NewsPreview from './NewsPreview/NewsPreview'
import './News.css'
import bgImg from'../../assets/images/newImage1.png';
import bgImg2 from'../../assets/images/newImage2.png';
import bgImg3 from'../../assets/images/newImage3.png';
// import { ViewAll } from '../AddCommunity/AddCommunity';
import threeDots from '../../assets/images/threeDots.png'
import showMoreIcon from '../../assets/images/showMoreIcon.png'

function News() {

     const ViewAll=()=>{
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
    return (
        <div className="News">
             <div style={{textAlign: 'end'}} className="postThree">
             <img src={threeDots} width="18"
                height="4" alt="" />
            </div>
            <div style={{marginBottom: '0px'}} className="addText">
              Posts Analytics
            </div>

            <div className="newsPreviewWrapper flex column ac">
                <NewsPreview bgImg={bgImg} npViewCount="2459" npCommentCount="47"/>
               
                <NewsPreview bgImg={bgImg2} npViewCount="2459" npCommentCount="47"/>

                <NewsPreview bgImg={bgImg3} npViewCount="2459" npCommentCount="47"/>

            </div>
            <ViewAll/>


        </div>
    )
}

export default News
