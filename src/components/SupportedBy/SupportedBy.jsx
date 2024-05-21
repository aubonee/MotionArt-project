import React from 'react';
 import img from '../../assets/motionarteffect-img8.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const SupportedBy = () => {
    useGSAP(()=>{
        gsap.from(".gsapbox",{
            y: 0,
            x:0,
            duration:2,
            delay:1,
        })
      })
    return (
    <div className=" gsapbox mx-auto w-full my-10">
            <div className='mx-auto flex flex-col py-10 justify-center items-center text-center w-11/12 lg:w-4/6 bg-gradient-to-t from-[#110A22] to-[#231C33] shadow-inner  shadow-stone-500 rounded-lg text-[#EEE5FF]'>
            <h1 className='py-5 text-[32px]'> Supported by All Popular Browsers</h1>
            <p className='text-[16px] pb-8'>
            Rest assured, Motion Art is designed to be compatible with all major web browsers.
            </p>
            <img src={img} alt="" />
        </div>
    </div>
    );
};

export default SupportedBy;