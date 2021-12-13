import React, { useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'

function Giveaways() {
    const [giveaways, setGiveaways]= useState(2)
    const [isitemsRented, setIsItemsRented]= useState(false)
    return (
        <div className='profileInfoCards'>
            <div className="flex sb">
                <div className="PICsHeader">
                Number of Giveaways 
                </div>
                <div onClick={()=> setIsItemsRented(!isitemsRented)} className="pointer">
                <IoMdAddCircleOutline color='blue' size={30} />
                </div>
            </div>

            <div className="PICInput">
               {
                   isitemsRented?
                   <input type="number" value={giveaways} onChange={(e)=> setGiveaways(e.target.value)} />
                   :
                   <div className="PICsDetails">
                     {giveaways + " Items given away for free"}
                   </div>
               }
            </div>
        </div>
    )
}

export default Giveaways
