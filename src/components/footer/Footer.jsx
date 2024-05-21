import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';


const Footer = () => {
  useGSAP(()=>{
    gsap.from(".gsapbox",{
        y: 0,
        x:0,
        duration:2,
        delay:1,
    })
  })
    return (
        <div className='gsapbox mt-5 px-5 py-3 text-[#EEE5FF] bg-gradient-to-r from-[#F87516] to-[#5e11ff] flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center'>
           

           <div>
            <ul className=' text-[12px] list-none flex justify-end items-center gap-5'>  
                 <li>Documentation</li>
               <li>Support</li>
            </ul>
          
           </div>
           <div className='text-[12px]'>
         <p>  © 2023 Copywrite. All rights reserved by QodeMatrix</p>
           </div>
          
        </div>
    );
};

export default Footer;