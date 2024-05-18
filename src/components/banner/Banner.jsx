import React from 'react';

const Banner = () => {
    return (
<div className="mx-auto w-full bg-[#0E0F1A] h-[100vh] flex justify-center items-center">

<div className='mx-auto w-11/12  flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full md:w-2/6 lg:w-1/5'> 
                    <h3 className='text-[#EEE5FF] '>
                  <span className='bg-gradient-to-r from-[#F87516] to-[#5e11ff] bg-clip-text text-transparent '>  Transform </span> <br /> <span className='bg-gradient-to-r from-[#F87516] to-[#5e11ff] bg-clip-text text-transparent '> Your Website </span> <br />With Motion Art Effect
                    </h3>
            </div>
            <div  className='w-full md:w-4/6 lg:w-3/5 '>
                <h1 className='text-[#EEE5FF] text-[65px] font-Outfit' >
                Attract Your <br /> Visitors Attention <br /> With Colorful <br />
                <span className='bg-gradient-to-r from-[#F87516] to-[#5e11ff] bg-clip-text text-transparent '>Motion Art Effect</span>
               
                </h1>
            </div>
        </div>
</div>
    );
};

export default Banner;