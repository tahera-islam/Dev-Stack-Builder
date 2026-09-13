
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <>
            <nav className='sticky top-0 z-50 flex justify-between items-center container mx-auto'>
                <button className='md:hidden text-2xl'> ☰</button>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>

                <div className='hidden md:flex gap-7 text-[#475569]'>
                    <a href="" className='text-[#DB2777]'>Home</a>
                    <a href="">Technologies</a>
                    <a href="">Projects</a>
                    <a href="">About</a>  
                    <a href="">Contact</a>
                </div>
                <div>
                    <button className="btn bg-[#FFFFFF] text-[#334155]">Sign In</button>
                    <button className="btn bg-[#D91B7E]
                 py-5 px-2.5 text-[#FFFFFF] rounded-[999px]">Sign Up</button>
                </div>
            </nav>
            <div className="divider"></div>
        </>
    );
};

export default Nav;
