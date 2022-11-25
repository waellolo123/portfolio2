import React from 'react'
import "./softwares.css"
import softs from "../../assets/softs.png"
import Software from "../../components/software/Software"
const Softwares = () => {
  return (
    <div className='softwares'>
       <div className="softs-container">
         <div className="softs-top">
            <img src={softs} alt="" />
            <h2>Softwares</h2>
         </div>
         <div className="softs-bottom">
          <Software />
         </div>
       </div>
    </div>
  )
}

export default Softwares