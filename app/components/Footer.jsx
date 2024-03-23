import React from 'react'

const Footer = () => {
  return (
    <footer>
      <footer className='footer border z-10 border-t-[#3353F] border-l-transparent border-r- text-white'>
        <div className='container p-12 flex justify-between'>
         <span><img src='/images/logo.png' className='w-24 h-5'/></span>
         <p className='text-slate-600'>All rights reserved.</p>
        </div>
      </footer>
    </footer>
  )
}

export default Footer
