import React from 'react'
import './UDOperations.css'

function UDOperations() {

    const UDOButton=({name, fun})=>{
        return(
            <div onClick={fun} className="UDOButton shadow pointer">
                    {name}
            </div>
        )
    }

    const handleUpdateProfile=()=>{

    }

    const handleFavoritePost=()=>{

    }


    const handlePost=()=>{

    }
    return (
        <div className='UDOperations flex sa'>
            <UDOButton name="Update Profile" fun={handleUpdateProfile} />
            <UDOButton name="Post" fun={handlePost} />
            <UDOButton name="Favorite Post" fun={handleFavoritePost} />
        </div>
    )
}

export default UDOperations
