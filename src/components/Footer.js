import React from 'react'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/>
            <Twitter/>
            <Facebook/>
            <LinkedIn/>
        </div>
        <p> &copy; 2023 JeeHwan_pizza.com</p>
    </div>
  )
}

export default Footer