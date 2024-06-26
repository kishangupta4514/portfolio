"use client";
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from "../../public/Github.png";
import LinkedinIcon from "../../public/Linkdein.png";
import InstagramIcon from "../../public/InstagramIcon.png";
import TwitterIcon from "../../public/twitterIcon.png";
import LeetcodeIcon from "../../public/leetcode.jpeg";
import Link from "next/link";
import Image from "next/image";

const EMAILJS_SERVICE_ID = "service_jr5upcg";
const EMAILJS_TEMPLATE_ID = "template_0i7e8gq";
const EMAILJS_PUBLIC_KEY = "BlbN-MTbwOsXbuBtp";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: formData.email,
        },
      )
      .then(
        (response) => {
          console.log("Email sent:", response);
          setConfirmationMessage('Email sent successfully.');
        },
        (error) => {
          console.error("Email sending failed:", error);
          setConfirmationMessage('Failed to send email.');
        }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      setConfirmationMessage('Error sending email.');
    }
  };
    
  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-1'>
        <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/kishangupta4514">
            <Image src={GithubIcon} alt="Github Icon" className='w-9 h-9 rounded-full' />
          </Link>
          <Link href="https://www.linkedin.com/in/kishangupta4514/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className='w-10 h-10 rounded-full' />
          </Link>
          <Link href="https://twitter.com/kishangupta4514/">
            <Image src={TwitterIcon} alt="Twitter Icon" className='rounded-full h-9 w-9 flex items-center justify-center border-0' />
          </Link>
          <Link href="https://www.instagram.com/_kishan_gupta__29/">
            <Image src={InstagramIcon} alt="Instagram Icon" className='rounded-full h-9 w-9 flex items-center justify-center border-0' />
          </Link>
          <Link href="https://www.instagram.com/_kishan_gupta__29/">
            <Image src={LeetcodeIcon} alt="Instagram Icon" className='rounded-full h-9 w-9 flex items-center justify-center border-0' />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label className='text-white block mb-2 text-sm font-medium'>Name</label>
            <input 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
              placeholder='John' 
            />
          </div>
          <div className='mb-6'>
            <label className='text-white block mb-2 text-sm font-medium'>Your email</label>
            <input 
              name="email"  
              type="email"  
              value={formData.email} 
              onChange={handleChange} 
              required 
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
              placeholder='jacob@google.com' 
            />
          </div>
          <div className='mb-6'>
            <label className='text-white block mb-2 text-sm font-medium'>Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
              placeholder='Let&apos;s talk about...' 
            />
          </div>
          <button
            type="submit"
            value="Send"
            className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Send Message
          </button>
          {confirmationMessage && (
            <p className='mt-4 text-white'>{confirmationMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
