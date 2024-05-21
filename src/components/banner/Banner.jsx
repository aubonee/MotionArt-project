import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = () => {

    useGSAP(()=>{
        gsap.from(".gsapbox",{
            y: 0,
            x:0,
            duration:2,
            delay:1,
        })
      })
    return (
 

<div className=" gsapbox mx-auto w-full mb-5 h-[100vh] flex justify-center items-center">

<div className='mx-auto w-11/12  flex flex-col md:flex-row justify-start items-start gap-20'>
            <div className='w-full md:w-2/6 lg:w-1/5  flex justify-center items-start pt-3'> 
                    <h3 className='text-[#EEE5FF] leading-9 text-[18px]'>
                  <span className='bg-gradient-to-r from-[#F87516] to-[#5e11ff] bg-clip-text text-transparent '>  Transform </span> <br /> <span className='bg-gradient-to-r from-[#F87516] to-[#5e11ff] bg-clip-text text-transparent '> Your Website </span> <br />With Motion Art Effect
                    </h3>
            </div>
            <div  className='w-full md:w-4/6 lg:w-3/5 '>
                <h1 className='text-[#EEE5FF] text-[30px] md:text[40px] lg:text-[65px] font-Outfit' >
                Attract Your <br /> Visitors Attention <br /> With Colorful <br />
                <span className='bg-gradient-to-r from-[#F87516] to-[#5e11ff] bg-clip-text text-transparent '>Motion Art Effect</span>
               
                </h1>
                <p className='text-[#ADA7BD]'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
            </div>
        </div>
</div>
    );
};

export default Banner;