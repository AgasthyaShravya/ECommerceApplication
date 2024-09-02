import React from 'react'
import './Footer.css'
import logo_big from '../Assets/Frontend_Assets/logo_big.png'
import whatsapp_icon from '../Assets//Frontend_Assets/whatsapp_icon.png'
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo_big} alt=" "/>
            <p>Auraaa</p>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt=" "/>
            </div>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt=" "/>
            </div>
        </div>
        <div className='footer-copyright'><hr/>
            <p>Copyright@2024-All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer