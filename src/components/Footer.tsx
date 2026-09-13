import FooterLogo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <img src={FooterLogo} alt="" />
                    <p>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <ul>
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>


                <div>
                    <h4>PRODUCT</h4>
                    <a href="">Home</a>
                    <a href="">Technologies</a>
                    <a href="">Projects</a>
                </div>


                <div>
                    <h3>COMPANY</h3>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Careers</a>
                </div>


                <div>
                    <h5>LEGAL</h5>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                </div>
            </div>

            <hr />

            <div>
                <p>© 2026 Dev Stack. All rights reserved</p>
                <div>
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;