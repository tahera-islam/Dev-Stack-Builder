import logoBanner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between mt-10 md:mt-24 mb-16 md:mb-28 mx-5 md:mx-26 '>
                <div className='my-8 md:my-11.5 mr-0 md:mr-8 pl-0 md:pl-30'>
                    <h1 className='font-extrabold text-6xl leading-15'>Build Your Ideal <br /><span className='bg-linear-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>

                    <p className='text-[#475569] leading-7 text-lg font-[Plus Jakarta Sans] pb-10 mt-6 max-w-xl'>Explore frontend, backend,database,and  tooling options,compare them side by side, and put together the stack that fits your next project</p>

                    <div className='flex gap-3 pt-3'>
                        <button className="btn px-2.5 py-3 text-[#FFFFFF] font-semibold rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899]">Explore Technologies</button>
                        <button className="btn bg-[#FFFFFF] text-[#374151] outline-[#E5E7EB] px-11.5 py-4 rounded-lg ">Learn More</button>
                    </div>
                </div>


                <div className='px-0 md:px-17.5 py-8.75 flex justify-center'>
                    <img src={logoBanner} className='w-87.5 h-87.5' alt="Logo Banner" />
                </div>
            </div>
        </>
    );
};

export default Banner;