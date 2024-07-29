import Header from '../../components/header'
import Footer from '../../components/footer'
import DarkThemeButton from '../../components/dark-theme-button'
import OffCanvasMenu from '../../components/OffCanvasMenu'
import OffCanvasMobileMenu from '../../components/OffCanvasMobileMenu'
import OffCanvasSearch from '../../components/OffCanvasSearch'

const Contact = () => {
    return (
        <>
            <Header />
            <OffCanvasMenu />
            <OffCanvasMobileMenu />
            <OffCanvasSearch />
            <DarkThemeButton />
            <div
                className="main"
                data-bs-spy="scroll"
                data-bs-target="#navContentmenu"
                data-bs-root-margin="0px 0px -50%"
                data-bs-smooth-scroll="true"
            >
                {/*breadcrumb Section ======================*/}
                <div className="section-breadcrumb pb-30">
                    <div className="container">
                        <nav aria-label="breadcrumb-nav">
                            <ol className="breadcrumb breadcrumb-style-2 mt-20 mb-0 ">
                                <li className="breadcrumb-item breadcrumb-item-style-2">
                                    <a href="index.html">Home</a>
                                </li>
                                <li
                                    className="breadcrumb-item breadcrumb-item-style-2 active"
                                    aria-current="page"
                                >
                                    Contact
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* breadcrumb-wrapper */}
                </div>
                {/*breadcrumb Section ======================*/}
                {/*Blog Section ======================*/}
                <section className="section-blog pb-30 pb-md-60 pb-lg-90">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-8  col-lg-8">
                                <div className="contact-page-content">
                                    <h5 className="mb-20 fix-width-post-content title-style-2">
                                        Let’s Talk
                                    </h5>
                                    <p className="mb-30 fix-width-post-content">
                                        I'm always excited to connect with fellow travel enthusiasts,
                                        readers, and potential collaborators. Whether you have questions
                                        about a destination, want travel tips, or simply wish to share
                                        your own adventures, I'd love to hear from you.
                                    </p>
                                    <p className="mb-60 fix-width-post-content">
                                        Drop me a message below, and let's embark on a conversation filled
                                        with wanderlust and travel tales!
                                    </p>
                                    <div className="contact-from-area fix-width-post-content">
                                        <h5 className="mb-20 title-style-2">Get in Touch</h5>
                                        <form id="contactForm" className="contact-from">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="firstname">
                                                            First Name
                                                            <svg
                                                                width={10}
                                                                height={10}
                                                                viewBox="0 0 10 10"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M5 1V9M8 2L2 8M9 5H1M8 8L2 2"
                                                                    stroke="#4C9BB3"
                                                                    strokeWidth="0.8"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="InputName"
                                                            className="form-control"
                                                            id="firstname"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="lastname">
                                                            Last Name
                                                            <svg
                                                                width={10}
                                                                height={10}
                                                                viewBox="0 0 10 10"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M5 1V9M8 2L2 8M9 5H1M8 8L2 2"
                                                                    stroke="#4C9BB3"
                                                                    strokeWidth="0.8"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            className="form-control"
                                                            id="lastname"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">
                                                    Email
                                                    <svg
                                                        width={10}
                                                        height={10}
                                                        viewBox="0 0 10 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M5 1V9M8 2L2 8M9 5H1M8 8L2 2"
                                                            stroke="#4C9BB3"
                                                            strokeWidth="0.8"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="InputEmail"
                                                    className="form-control"
                                                    id="email"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="subject">Subject</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-control"
                                                    id="subject"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message">Your Message</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={3}
                                                    id="message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary mb-lg-0 mb-20 mt-lg-40 mt-10"
                                            >
                                                Submit Form
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 ">
                                {/* author-card */}
                                <div className="sticky-elements">
                                    <div className="author-card author-card-sidebar-style-2  flex-column mb-30">
                                        <div className="author-image m-auto">
                                            <img
                                                src="assets/images/placeholder.svg"
                                                data-src="assets/images/about-image-1.png"
                                                alt="author-image"
                                            />
                                        </div>
                                        <h4 className="author-name">Mike Aiden</h4>
                                        <div className="author-content">
                                            <p className="text-center mb-10 ">
                                                I’m a intrepid travel blogger, weaves tales of exploration and
                                                discovery. Let's traverse the globe together and share in the
                                                beauty of our world.
                                            </p>
                                        </div>
                                        <div className="author-socials-area">
                                            <h5 className="title mb-20">Follow me</h5>
                                            <div className="author-socials">
                                                <a href="https://www.facebook.com/" className="facebook">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="https://www.instagram.com/" className="instagram">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                                <a href="https://www.linkedin.com/" className="linkedin">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                                <a href="https://www.youtube.com/" className="youtube">
                                                    <i className="fa-brands fa-youtube" />
                                                </a>
                                                <a href="https://www.pinterest.com/" className="pinterest">
                                                    <i className="fab fa-pinterest-p" />
                                                </a>
                                                <a href="https://www.youtube.com/" className="youtube">
                                                    <i className="fa-brands fa-youtube" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="author-information-area">
                                            <h5 className="title mb-30">Information</h5>
                                            <div className="single-info">
                                                <span className="information-icon">
                                                    <img
                                                        src="assets/images/placeholder.svg"
                                                        data-src="assets/images/phone.png"
                                                        alt="phone"
                                                    />
                                                </span>
                                                <a href="tel:+14842989691">+14842989691</a>
                                            </div>
                                            <div className="single-info">
                                                <span className="information-icon">
                                                    <img
                                                        src="assets/images/placeholder.svg"
                                                        data-src="assets/images/mail.png"
                                                        alt="phone"
                                                    />
                                                </span>
                                                <a href="mailto:contact@exploreist.com">
                                                    contact@exploreist.com
                                                </a>
                                            </div>
                                            <div className="single-info">
                                                <span className="information-icon">
                                                    <img
                                                        src="assets/images/placeholder.svg"
                                                        data-src="assets/images/location.png"
                                                        alt="phone"
                                                    />
                                                </span>
                                                <address className="text-start">
                                                    132, My Street, Kingston,New York 12401.
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* author-card */}
                            </div>
                        </div>
                    </div>
                    {/* container */}
                </section>
                {/*Blog Section ======================*/}
                {/*add banner ======================*/}
                <div
                    className="section-banner d-none d-lg-block pb-40 pb-lg-100 wow fadeInUp"
                    data-wow-delay="0.4s"
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="add-banner">
                                    <a href="#">
                                        <img
                                            src="assets/images/add-02.png"
                                            alt="add-image"
                                            className="border-rarius-14"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Add banner ======================*/}
                {/*CTA Section ======================*/}
                <section
                    className="section-cta wow fadeInUp"
                    data-bs-theme="light"
                    data-wow-delay="0.4s"
                >
                    <div className="container">
                        <div className="cta-area pt-lg-60 pb-lg-90 pt-30 pb-30">
                            <div className="col-xl-6">
                                <div className="cta-content pl-lg-100">
                                    <p className="fs-6 text-white mb-10">Keep in Touch</p>
                                    <h3 className=" fs-3 text-white  mb-30 ">Explore the world</h3>
                                    <form>
                                        <div className="form-group d-flex gap-30">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Your email address"
                                                required
                                            />
                                            <button type="submit" className="btn">
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*CTA Section ======================*/}
            </div>

            <Footer />
        </>
    )
}

export default Contact