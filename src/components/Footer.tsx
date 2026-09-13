import FooterLogo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <>
            <div className='mt-16 mb-12 mx-5 
        md:mx-18 px-5 md:px-8'>
                <div className='flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 pb-10'>
                    <div className='max-w-sm'>
                        <img src={FooterLogo} className='mb-3 ' alt="Dev Stack" />
                        <p className='text-[12px] leading-4.5 text-[#64748B] mb-3 '>Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <ul className='text-[#475569] pt-3 flex gap-4'>
                            <a href="">Github</a>
                            <a href="">Twitter</a>
                            <a href="">LinkedIn</a>
                        </ul>
                    </div>


                    <div>
                        <h4 className='text-[#0F172A] font-semibold mb-3'>PRODUCT</h4>
                        <ul className='text-[#64748B] space-y-2 text-sm'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className='text-[#0F172A] font-semibold mb-3'>COMPANY</h4>
                        <ul className='text-[#64748B]  space-y-2 text-sm"'>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className='text-[#0F172A] font-semibold mb-3'>LEGAL</h4>
                        <ul className='text-[#64748B] space-y-2 text-sm'>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>


                <div className='justify-between  border-t border-slate-800 pt-5 flex flex-col md:flex-row md:justify-between gap-3 text-[#94A3B8] text-xs'>
                    <p>© 2026 Dev Stack. All rights reserved</p>
                    <div className='flex gap-4'>
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;