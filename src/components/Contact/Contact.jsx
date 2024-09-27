import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form action='' method='post'>
        <label>Name</label>
        <input type='text' name='name' placeholder='Enter your name'/>
        <label>Email</label>
        <input type='email' name='email' placeholder='Enter your email'/>
        <label>Message</label>
        <textarea name='message' cols='30' rows='10' placeholder='Enter your message'></textarea>
        <button type='submit' href="">Submit</button>
      </form>
    </section>
  );
}

export default Contact;