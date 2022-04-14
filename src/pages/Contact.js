import { Input } from '@mui/icons-material'
import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
        style={{backgroundImage: `url(${PizzaLeft})`}}>
            sdsdsds
        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlfor="name">Full Name</label>
                <Input name="name" placeholder="Enter full name..." type="text"/>
                <label htmlfor="email">Email</label>
                <Input name="email" placeholder="Enter email..." type="email"/>
                <label htmlfor="message">Message</label>
                <textarea rows="6" placeholder='Enter message...' name="mesage" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact