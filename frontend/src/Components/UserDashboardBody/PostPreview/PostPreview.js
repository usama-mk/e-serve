import React, { useState } from 'react'
import './PostPreview.css'

function PostPreview() {
    const [name, setName]= useState('Bat')
    const [category, setCategory]= useState('Sports')
    const PPOperationsButton=({name, fun})=>{
        return(
            <div onClick={fun} className="PPOperationsButton shadow pointer">
                {name}
            </div>
        )
    }

    const handleFavorite=()=>{
        
    }
    const handleDelete=()=>{
        
    }
    const handleEdit=()=>{
        
    }
    return (
        <div className='PostPreview shadow pointer'>
            <div className="previewPostDetails flex">
                <div className="PPImage">
                    <img src="https://miro.medium.com/max/1200/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg"  alt="preview" />
                </div>
                <div className="PPDetails">
                    <div className="PPName">
                        {name}
                    </div>
                    <div className="PPCategory">
                        {category}
                    </div>
                </div>
            </div>

            <div className="PPOperations flex">
                <PPOperationsButton name="Favorite" fun={handleFavorite} />
                <PPOperationsButton name="Delete" fun={handleDelete} />
                <PPOperationsButton name="Edit" fun={handleEdit} />
            </div>
        </div>
    )
}

export default PostPreview
