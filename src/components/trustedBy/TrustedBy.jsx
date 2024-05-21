
import img1 from '../../assets/motionarteffect-img2.png'
import img2 from '../../assets/motionarteffect-img1.png'
import img3 from '../../assets/motionarteffect-img3.png'
import img4 from '../../assets/motionarteffect-img4.png'


const TrustedBy = () => {
    return (
        <div className='text-[#EEE5FF] py-10 '>
            <div className='text-center mb-20'>Trusted by thousands of users around the world</div>
            <div className=" mx-auto w-full lg:w-11/12 grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-10">
                <div className='flex justify-center items-center'>
                    <div className="logo">
                        <img src={img1} alt="" />
                    </div>
                    <div className="info ml-5 flex flex-col leading-8">

                        <div className="rating">
                            <img src={img4} alt="" />
                        </div>
                        <div className="pt-2 numbers">
                            <p>4.5 Score, 9 Reviews</p>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center items-center'>
                    <div className="logo">
                        <img src={img2} alt="" />
                    </div>
                    <div className="info ml-5 flex flex-col leading-8">

                        <div className="rating">
                            <img src={img4} alt="" />
                        </div>
                        <div className="pt-2 numbers">
                            <p>4.5 Score, 9 Reviews</p>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center items-center'>
                    <div className="logo">
                        <img src={img3} alt="" />
                    </div>
                    <div className="info ml-5 flex flex-col leading-8">

                        <div className="rating">
                            <img src={img4} alt="" />
                        </div>
                        <div className="pt-2 numbers">
                            <p>4.5 Score, 9 Reviews</p>
                        </div>
                    </div>

                </div>
            </div>
         
        </div>
    );
};

export default TrustedBy;