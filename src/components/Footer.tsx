import FooterLogo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <>
            <div className='mt-16 mb-12
        mx-18 px-8'>
                <div className='flex justify-between pb-12'>
                    <div>
                        <img src={FooterLogo} className='mb-3 ' alt="" />
                        <p className='text-[12px] leading-4.5 text-[#64748B] mb-3 '>Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <ul className='text-[#475569] pt-3 flex gap-4'>
                            <a href="">Github</a>
                            <a href="">Twitter</a>
                            <a href="">LinkedIn</a>
                        </ul>
                    </div>


                    <div>
                        <h4 className='text-[#0F172A]'>PRODUCT</h4>
                        <ul className='text-[#64748B]'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className='text-[#0F172A]'>COMPANY</h3>
                        <ul className='text-[#64748B]'>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>


                    <div>
                        <h5 className='text-[#0F172A]'>LEGAL</h5>
                        <ul className='text-[#64748B]'>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>


                <div className='flex justify-between text-[#94A3B8]'>
                    <p>© 2026 Dev Stack. All rights reserved</p>
                    <div>
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;