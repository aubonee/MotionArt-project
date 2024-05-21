
import img from '../../assets/motionarteffect-img5.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const PurchaseFromEnvato = () => {
    // useGSAP(()=>{
    //     gsap.from(".gsapbox",{
    //         y: -200,
    //         duration:2,
    //         delay:1,
    //     })
    //   })
    useGSAP(()=>{
        gsap.from(".gsapbox",{
           scale: 0,
           opacity: 0,
          duration:2,
            delay:0.5,
            scrollTrigger:{
                trigger: ".gsapbox",
                scroller:"body",
                markers:true,
                start: "top 60%",
                end:"top 30%",
                scrub:2

            }
        })
      })
    return (
     <div>
           <div className='gsapbox w-full my-5'>
            <div className="mx-auto  px-10 w-11/12 text-[#EEE5FF] py-12 flex flex-col lg:flex-row justify-center lg:justify-between  items-center">
                <div className='w-full lg:w-3/5'>
                    <h2 className='text-[30px] leading-10 '>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
                    <p className='text-[18px] leading-8 text-[#ADA7BD] mt-5 mb-2'> Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                    <button className='my-10 btn bg-gradient-to-r from-[#F87516] flex justify-center items-center to-[#5e11ff] rounded-md px-5 py-3 '>Purchase From Envato  <div className='ml-3 mt-1'> <FontAwesomeIcon  className='text-[20px]' icon={faArrowRight} /></div></button>
                </div>
                <div className='w-full lg:w-1/5'>
            <img src={img} alt="motionarteffect" />
                </div>
            </div>
        </div>
     </div>
    );
};

export default PurchaseFromEnvato;