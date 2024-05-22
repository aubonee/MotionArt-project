import React from 'react';
import img1 from '../../assets/motionarteffect-img11.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ApplyOn = () => {
    useGSAP(()=>{
        gsap.from(".gsapAni",{
            y: 0,
            x:0,
            duration:2,
            delay:1,
        })
      })
    return (
     <div className=" w-full mx-auto py-10">
           <div className='w-full lg:w-11/12 mx-auto'>
            <div>
                <h2 className='gsapAni text-center text-[24px] md:text-[32px] lg:text-[48px] leading-12 text-[#EEE5FF] py-5 font-semibold'>Apply On Any Section Or Enable <br /> For Whole Page</h2>
            </div>
            <div className='mx-auto px-10 flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div className='gsapAni mx-auto flex flex-col py-10 px-2 lg:px-5 justify-center  bg-gradient-to-t from-[#110A22] to-[#231C33] shadow-inner  shadow-stone-500 rounded-lg text-[#EEE5FF]'>
                    <h3 className='px-5 py-2 text-[24px] font-semibold text-left'>Apply On Section</h3>
                    <p className='px-5 py-2 text-[14px] text-left leading-8'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                    <img src={img1} alt="motionarteffect-img11" />
                </div>
                <div className='gsapAni mt-5 lg:mt-20 mx-auto flex flex-col py-10 px-2 lg:px-5 justify-center bg-gradient-to-t from-[#110A22] to-[#231C33] shadow-inner  shadow-stone-500 rounded-lg text-[#EEE5FF]'>
                    <h3 className='px-5 py-2 text-[24px] font-semibold text-left'>Apply On Section</h3>
                    <p className='px-5 py-2 text-[14px] text-left leading-6'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                    <img src={img1} alt="motionarteffect-img11" />
                </div>
            </div>
        </div>
     </div>
    );
};

export default ApplyOn;