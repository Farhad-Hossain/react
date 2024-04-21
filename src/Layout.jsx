const Layout = ({children})=> {
    return (
            <>
                {/* Preloader */}
                <div className="preloader">
                    <div className="loader">
                        <div className="loader-outter" />
                        <div className="loader-inner" />
                        <div className="indicator">
                            <svg width="16px" height="12px">
                                <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
                                <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* End Preloader */}
                
                {/* Header Area */}
                <header className="header">
                    {/* Topbar */}
                    <div className="topbar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-5 col-12">
                                    {/* Contact */}
                                    <ul className="top-link">
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Doctors</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                    </ul>
                                    {/* End Contact */}
                                </div>
                                <div className="col-lg-6 col-md-7 col-12">
                                    {/* Top Contact */}
                                    <ul className="top-contact">
                                        <li>
                                            <i className="fa fa-phone" />
                                            +880 1234 56789
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope" />
                                            <a href="mailto:support@yourmail.com">support@yourmail.com</a>
                                        </li>
                                    </ul>
                                    {/* End Top Contact */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Topbar */}
                    {/* Header Inner */}
                    <div className="header-inner">
                        <div className="container">
                            <div className="inner">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-12">
                                        {/* Start Logo */}
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="img/logo.png" alt="#" />
                                            </a>
                                        </div>
                                        {/* End Logo */}
                                        {/* Mobile Nav */}
                                        <div className="mobile-nav" />
                                        {/* End Mobile Nav */}
                                    </div>
                                    <div className="col-lg-7 col-md-9 col-12">
                                        {/* Main Menu */}
                                        <div className="main-menu">
                                            <nav className="navigation">
                                                <ul className="nav menu">
                                                    <li className="active">
                                                        <a href="#">
                                                            Home <i className="icofont-rounded-down" />
                                                        </a>
                                                        <ul className="dropdown">
                                                            <li>
                                                                <a href="index.html">Home Page 1</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Doctos </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Services </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Pages <i className="icofont-rounded-down" />
                                                        </a>
                                                        <ul className="dropdown">
                                                            <li>
                                                                <a href="404.html">404 Error</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Blogs <i className="icofont-rounded-down" />
                                                        </a>
                                                        <ul className="dropdown">
                                                            <li>
                                                                <a href="blog-single.html">Blog Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact Us</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        {/*/ End Main Menu */}
                                    </div>
                                    <div className="col-lg-2 col-12">
                                        <div className="get-quote">
                                            <a href="appointment.html" className="btn">
                                                Book Appointment
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ End Header Inner */}
                </header>
                {/* End Header Area */}
                {children}
                {/* Footer Area */}
                <footer id="footer" className="footer ">
                    {/* Footer Top */}
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-footer">
                                        <h2>About Us</h2>
                                        <p>
                                            Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod
                                            tempor incididunt ut labore dolore magna.
                                        </p>
                                        {/* Social */}
                                        <ul className="social">
                                            <li>
                                                <a href="#">
                                                    <i className="icofont-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="icofont-google-plus" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="icofont-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="icofont-vimeo" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="icofont-pinterest" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* End Social */}
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-footer f-link">
                                        <h2>Quick Links</h2>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            Home
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            Our Cases
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            Other Links
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            Consuling
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            Finance
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            Testimonials
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            FAQ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-caret-right" aria-hidden="true" />
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-footer">
                                        <h2>Open Hours</h2>
                                        <p>
                                            Lorem ipsum dolor sit ame consectetur adipisicing elit do
                                            eiusmod tempor incididunt.
                                        </p>
                                        <ul className="time-sidual">
                                            <li className="day">
                                                Monday - Fridayp <span>8.00-20.00</span>
                                            </li>
                                            <li className="day">
                                                Saturday <span>9.00-18.30</span>
                                            </li>
                                            <li className="day">
                                                Monday - Thusday <span>9.00-15.00</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-footer">
                                        <h2>Newsletter</h2>
                                        <p>
                                            subscribe to our newsletter to get allour news in your inbox..
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        </p>
                                        <form
                                            action="mail/mail.php"
                                            method="get"
                                            target="_blank"
                                            className="newsletter-inner"
                                        >
                                            <input
                                                name="email"
                                                placeholder="Email Address"
                                                className="common-input"
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Your email address'"
                                                required=""
                                                type="email"
                                            />
                                            <button className="button">
                                                <i className="icofont icofont-paper-plane" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ End Footer Top */}
                    {/* Copyright */}
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="copyright-content">
                                        <p>
                                            © Copyright 2018 | All Rights Reserved by{" "}
                                            <a href="https://www.wpthemesgrid.com" target="_blank">
                                                wpthemesgrid.com
                                            </a>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ End Copyright */}
                </footer>
                {/*/ End Footer Area */}
                {/* jquery Min JS */}
                {/* jquery Migrate JS */}
                {/* jquery Ui JS */}
                {/* Easing JS */}
                {/* Color JS */}
                {/* Popper JS */}
                {/* Bootstrap Datepicker JS */}
                {/* Jquery Nav JS */}
                {/* Slicknav JS */}
                {/* ScrollUp JS */}
                {/* Niceselect JS */}
                {/* Tilt Jquery JS */}
                {/* Owl Carousel JS */}
                {/* counterup JS */}
                {/* Steller JS */}
                {/* Wow JS */}
                {/* Magnific Popup JS */}
                {/* Counter Up CDN JS */}
                {/* Bootstrap JS */}
                {/* Main JS */}
            </>
    );
}
export default Layout;