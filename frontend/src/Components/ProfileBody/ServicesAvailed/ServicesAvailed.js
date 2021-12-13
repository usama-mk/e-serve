import React, { useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'

function ServicesAvailed() {
    const [servicesAvailed, setServicesAvailed]= useState(2)
    const [isitemsRented, setIsItemsRented]= useState(false)
    return (
        <div className='profileInfoCards'>
            <div className="flex sb">
                <div className="PICsHeader">
                Number of services availed 
                </div>
                <div onClick={()=> setIsItemsRented(!isitemsRented)} className="pointer">
                <IoMdAddCircleOutline color='blue' size={30} />
                </div>
            </div>

            <div className="PICInput">
               {
                   isitemsRented?
                   <input type="number" value={servicesAvailed} onChange={(e)=> setServicesAvailed(e.target.value)} />
                   :
                   <div className="PICsDetails">
                     {servicesAvailed + " services availed"}
                   </div>
               }
            </div>
        </div>
    )
}

export default ServicesAvailed
