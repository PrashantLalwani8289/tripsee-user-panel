
const OffCanvasMobileMenu = () => {
    return (
        <div
            className="offcanvas offcanvas-end offcanvasmobile-menu"
            id="offcanvasmobile-menu"
            data-bs-backdrop="static"
            tabIndex={-1}
        >
            <div className="offcanvas-header pb-30">
                <a
                    className="navbar-brand dark-light-logo"
                    href="index.html"
                    aria-label="nav-brands"
                >
                    <img
                        src="assets/images/placeholder.svg"
                        data-src="assets/images/logo-dark.png"
                        className="logo-dark img-fluid"
                        alt="logo"
                    />
                    <img
                        src="assets/images/placeholder.svg"
                        data-src="assets/images/logo-white.png"
                        className="logo-light img-fluid"
                        alt="logo"
                    />
                </a>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body d-flex justify-content-start">
                <ul className="navbar-nav custom-navbar-nav mb-2  mb-lg-0 hover-menu">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link active d-flex gap-2 align-items-center"
                            aria-current="page"
                            href="index.html"
                            aria-label="nav-links"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Home
                            <span className="dropdown-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="index.html"
                                    aria-label="single-pages"
                                >
                                    Home 1
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="home-2.html"
                                    aria-label="single-pages"
                                >
                                    Home 2
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="home-3.html"
                                    aria-label="single-pages"
                                >
                                    Home 3
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="home-4.html"
                                    aria-label="single-pages"
                                >
                                    Home 4
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="home-5.html"
                                    aria-label="single-pages"
                                >
                                    Home 5
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="home-6.html"
                                    aria-label="single-pages"
                                >
                                    Home 6
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link d-flex gap-2 align-items-center"
                            href="blog-1.html"
                            aria-label="nav-links"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                        >
                            Blog
                            <span className="dropdown-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="blog-1.html"
                                    aria-label="single-pages"
                                >
                                    Blog 1
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="blog-2.html"
                                    aria-label="single-pages"
                                >
                                    Blog 2
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="blog-3.html"
                                    aria-label="single-pages"
                                >
                                    Blog 3
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="blog-4.html"
                                    aria-label="single-pages"
                                >
                                    Blog 4
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="blog-5.html"
                                    aria-label="single-pages"
                                >
                                    Blog 5
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="blog-6.html"
                                    aria-label="single-pages"
                                >
                                    Blog 6
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="blog-7.html"
                                    aria-label="single-pages"
                                >
                                    Blog 7
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="blog-8.html"
                                    aria-label="single-pages"
                                >
                                    Blog 8
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            href="about-1.html"
                            aria-label="nav-links"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            About
                            <span className="dropdown-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="about-1.html"
                                    aria-label="single-pages"
                                >
                                    About 1
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="about-2.html"
                                    aria-label="single-pages"
                                >
                                    About 2
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="about-3.html"
                                    aria-label="single-pages"
                                >
                                    About 3
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="about-4.html"
                                    aria-label="single-pages"
                                >
                                    About 4
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="about-5.html"
                                    aria-label="single-pages"
                                >
                                    About 5
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            href="contact-1.html"
                            aria-label="nav-links"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Contact
                            <span className="dropdown-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="contact-1.html"
                                    aria-label="single-pages"
                                >
                                    Contact 1
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="contact-2.html"
                                    aria-label="single-pages"
                                >
                                    Contact 2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            href="article-1.html"
                            aria-label="nav-links"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Article
                            <span className="dropdown-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="article-1.html"
                                    aria-label="single-pages"
                                >
                                    Article 1
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="article-2.html"
                                    aria-label="single-pages"
                                >
                                    Article 2
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="article-3.html"
                                    aria-label="single-pages"
                                >
                                    Article 3
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="article-4.html"
                                    aria-label="single-pages"
                                >
                                    Article 4
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="article-5.html"
                                    aria-label="single-pages"
                                >
                                    Article 5
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="article-6.html"
                                    aria-label="single-pages"
                                >
                                    Article 6
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="article-7.html"
                                    aria-label="single-pages"
                                >
                                    Article 7
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="article-8.html"
                                    aria-label="single-pages"
                                >
                                    Article 8
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            href="author-1.html"
                            aria-label="nav-links"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Author
                            <span className="dropdown-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="author-1.html"
                                    aria-label="single-pages"
                                >
                                    Author 1
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="author-2.html"
                                    aria-label="single-pages"
                                >
                                    Author 2
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="author-3.html"
                                    aria-label="single-pages"
                                >
                                    Author 3
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="author-4.html"
                                    aria-label="single-pages"
                                >
                                    Author 4
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            href="category-1.html"
                            aria-label="nav-links"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Catagory
                            <span className="dropdown-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="category-1.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 1
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="category-2.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 2
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="category-3.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 3
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="category-4.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 4
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="category-5.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 5
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="category-6.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 6
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown submenu">
                        <a
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            href="404-1.html"
                            aria-label="nav-links"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            404 page
                            <span className="dropdown-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-chevron-down"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="404-1.html"
                                    aria-label="single-pages"
                                >
                                    <span className="link-hover-animation-1">404 1</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="404-2.html"
                                    aria-label="single-pages"
                                >
                                    <span className="link-hover-animation-1">404 2</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="404-3.html"
                                    aria-label="single-pages"
                                >
                                    <span className="link-hover-animation-1">404 3</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="text-center d-flex justify-content-center px-30">
                {/* author-socials */}
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
                        <i className="fab fa-youtube" />
                    </a>
                    <a href="https://www.pinterest.com/" className="pinterest">
                        <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="https://twitter.com/" className="twitter">
                        <svg
                            width={16}
                            height={14}
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M15.8092 15.98H11.1569L6.89801 9.78339L1.56807 15.98H0.19043L6.28619 8.89157L0.19043 0.0195312H4.84276L8.87486 5.88989L13.9234 0.0195312H15.301L9.48808 6.77751L15.8092 15.98ZM11.8079 14.9929H13.9234L4.18054 1.05696H2.06508L11.8079 14.9929Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default OffCanvasMobileMenu