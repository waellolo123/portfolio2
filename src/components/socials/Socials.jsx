import React from 'react'
import './socials.css'
import {Link} from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'


const Socials = () => {
  return (
    <div className='socials'>
     <li><Link to=''  className='social-icon'> <BsFacebook /></Link></li>
     <li><Link to=''  className='social-icon'> <BsWhatsapp /></Link></li>
     <li><Link to=''  className='social-icon'> <BsYoutube /></Link></li>
     <li><Link to=''  className='social-icon'> <BsInstagram/></Link></li>
     <li><Link to=''  className='social-icon'> <BsTelegram/></Link></li>
    </div>
  )
}

export default Socials