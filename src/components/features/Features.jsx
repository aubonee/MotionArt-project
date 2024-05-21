import React from 'react';
import img1 from '../../assets/motionarteffect-img6.png'
import img2 from '../../assets/motionarteffect-img7.png'
import img3 from '../../assets/motionarteffect-img9.png'

const Features = () => {
    return (
        <div className='w-full text-[#EEE5FF] py-16'>
            <div className='w-11/12 md:w-2/3 lg:w-1/2 mx-auto'>
                <h2 className='py-5 text-[40px] text-center'> An All-Round Plugin With <br /> Powerful Features</h2>
                <p className='pb-5 text-[16px] text-center'> Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
            </div>

            <div className='mt-10 mx-auto w-11/12 lg:w-5/6 grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-15'>
                <div className="mx-auto flex flex-col  py-5  justify-center items-start text-left  bg-gradient-to-t from-[#110A22] to-[#231C33] shadow-inner  shadow-stone-500 rounded-lg text-[#EEE5FF]">
                <img src={img1} alt=""  className='w-[200px]'/>
                <h3 className='px-5 py-2 text-[18px] text-left'>Light Weight</h3>
                <p className=' px-5 py-2 text-[14px] text-left'>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
                <div className="mx-auto flex flex-col  py-5  justify-center items-start text-left  bg-gradient-to-t from-[#110A22] to-[#231C33] shadow-inner  shadow-stone-500 rounded-lg text-[#EEE5FF]">
                <img src={img2} alt=""  className='w-[200px]'/>
                <h3 className='px-5 py-2 text-[18px] text-left'>100% Responsive</h3>
                <p className=' px-5 py-2 text-[14px] text-left'>Create a consistent visual experience across all devices.</p>
                </div>
                <div className="mx-auto flex flex-col  py-5  justify-center items-start text-left  bg-gradient-to-t from-[#110A22] to-[#231C33] shadow-inner  shadow-stone-500 rounded-lg text-[#EEE5FF]">
                <img src={img3} alt=""  className='w-[200px]'/>
                <h3 className='px-5 py-2 text-[18px] text-left'>User Friendly Interface</h3>
                <p className=' px-5 py-2 text-[14px] text-left'>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;