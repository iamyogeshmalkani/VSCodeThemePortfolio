import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = ({ ContactRef }) => {
    const notify = (message) => toast(message);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_zrb1359', 'template_ilp7spw', e.target, 'dGDDjfJ37QeJ5y-Xp')
            .then(() => {
                notify('Message Sent!')
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('An error occurred while sending the message:', error);
                alert('An error occurred while sending the message.');
            });
    };

    return (
        <div className='flex flex-row gap-5 px-10 flex-1 max-sm:flex-col mt-10 items-center '>
            <ToastContainer />
            <div className='max-w-[45%] max-sm:w-[100%]  mt-10 max-sm:mt-1'>
                <img loading='lazy' className='border-2 rounded-[50%] p-2' alt='contact' src="/contact.jpeg" ></img>
            </div>
            <form onSubmit={handleSubmit} ref={ContactRef} className='flex flex-col gap-2 flex-auto max-sm:w-[100%]'>
                <p className='text-[2.8rem] font-bold text-white'>
                    <span className='text-[2.5rem] font-bold  border-b-8 border-b-p-300'>Contact</span> Me
                </p>
                <input
                    type="text"
                    className='p-2 bg-[transparent] rounded-lg placeholder:text-gray-300 text-gray-300  border border-white'
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    className='p-2 bg-[transparent] rounded-lg placeholder:text-gray-300 text-gray-300  border border-white'
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    rows={6}
                    className='p-2 bg-[transparent] rounded-lg placeholder:text-gray-300 text-gray-300  border border-white'
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" className='bg-p-300 rounded-lg p-2 text-white font-bold'>Send Message</button>
            </form>


        </div>

    );
};

export default ContactForm;
