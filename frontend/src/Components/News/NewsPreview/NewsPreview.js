import React from 'react'
import './NewsPreview.css'
import npBookmark from '../../../assets/images/npBookmark.png'
import npComment from '../../../assets/images/npComment.png'
import npEye from '../../../assets/images/npEye.png'

function NewsPreview({bgImg, npViewCount, npCommentCount}) {
    return (
        <div style={{
            backgroundImage: `url(${bgImg})`
        }}
         className="NewsPreview ">
            <div className="npHeader flex sb">
            <div className="npBookmark">
                <img src={npBookmark} width="9" height="14" alt="" />
            </div>

            <div className="npStats flex ac">
                <div className="npViews flex ac">
                    <img src={npEye} width="13" height="10" alt="" />
                    <div className="npViewsCount white">
                        {npViewCount}
                    </div>
                </div>
                <div className="npComments flex ac">
                <img src={npComment} width="12" height="10" alt="" />
                </div>
                <div className="npViewsCount white">
                        {npCommentCount}
                    </div>
            </div>
            </div>

            <div className="npTitle">
            The Next Big Thing in Space Travel
            </div>
            <div className="npSubtitle">
            Cambridge Astronomy Board
            </div>
        
        </div>
    )
}

export default NewsPreview
