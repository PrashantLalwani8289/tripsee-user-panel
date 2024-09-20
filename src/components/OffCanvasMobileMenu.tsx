import { Link } from "react-router-dom"
import { ROUTES } from "../constants/routes"

const OffCanvasMobileMenu = () => {
    return (
        <div
            className="offcanvas offcanvas-end offcanvasmobile-menu"
            id="offcanvasmobile-menu"
            data-bs-backdrop="static"
            tabIndex={-1}
        >
            <div className="offcanvas-header pb-30">
                <Link
                    className="navbar-brand dark-light-logo"
                    to={ROUTES.HOME}
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
                </Link>
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
                        <Link
                            className="nav-link active d-flex gap-2 align-items-center"
                            aria-current="page"
                            to={ROUTES.HOME}
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
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to={ROUTES.HOME}
                                    aria-label="single-pages"
                                >
                                    Home 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="home-2.html"
                                    aria-label="single-pages"
                                >
                                    Home 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="home-3.html"
                                    aria-label="single-pages"
                                >
                                    Home 3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="home-4.html"
                                    aria-label="single-pages"
                                >
                                    Home 4
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="home-5.html"
                                    aria-label="single-pages"
                                >
                                    Home 5
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="home-6.html"
                                    aria-label="single-pages"
                                >
                                    Home 6
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link d-flex gap-2 align-items-center"
                            to="blog-1.html"
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
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="blog-1.html"
                                    aria-label="single-pages"
                                >
                                    Blog 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="blog-2.html"
                                    aria-label="single-pages"
                                >
                                    Blog 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="blog-3.html"
                                    aria-label="single-pages"
                                >
                                    Blog 3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="blog-4.html"
                                    aria-label="single-pages"
                                >
                                    Blog 4
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="blog-5.html"
                                    aria-label="single-pages"
                                >
                                    Blog 5
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="blog-6.html"
                                    aria-label="single-pages"
                                >
                                    Blog 6
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="blog-7.html"
                                    aria-label="single-pages"
                                >
                                    Blog 7
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="blog-8.html"
                                    aria-label="single-pages"
                                >
                                    Blog 8
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            to="about-1.html"
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
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="about-1.html"
                                    aria-label="single-pages"
                                >
                                    About 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="about-2.html"
                                    aria-label="single-pages"
                                >
                                    About 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="about-3.html"
                                    aria-label="single-pages"
                                >
                                    About 3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="about-4.html"
                                    aria-label="single-pages"
                                >
                                    About 4
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="about-5.html"
                                    aria-label="single-pages"
                                >
                                    About 5
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            to="contact-1.html"
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
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="contact-1.html"
                                    aria-label="single-pages"
                                >
                                    Contact 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="contact-2.html"
                                    aria-label="single-pages"
                                >
                                    Contact 2
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            to="article-1.html"
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
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="article-1.html"
                                    aria-label="single-pages"
                                >
                                    Article 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="article-2.html"
                                    aria-label="single-pages"
                                >
                                    Article 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="article-3.html"
                                    aria-label="single-pages"
                                >
                                    Article 3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="article-4.html"
                                    aria-label="single-pages"
                                >
                                    Article 4
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="article-5.html"
                                    aria-label="single-pages"
                                >
                                    Article 5
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="article-6.html"
                                    aria-label="single-pages"
                                >
                                    Article 6
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="article-7.html"
                                    aria-label="single-pages"
                                >
                                    Article 7
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="article-8.html"
                                    aria-label="single-pages"
                                >
                                    Article 8
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            to="author-1.html"
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
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="author-1.html"
                                    aria-label="single-pages"
                                >
                                    Author 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="author-2.html"
                                    aria-label="single-pages"
                                >
                                    Author 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="author-3.html"
                                    aria-label="single-pages"
                                >
                                    Author 3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="author-4.html"
                                    aria-label="single-pages"
                                >
                                    Author 4
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            to="category-1.html"
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
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="category-1.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="category-2.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="category-3.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="category-4.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 4
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="category-5.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 5
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="category-6.html"
                                    aria-label="single-pages"
                                >
                                    Catagory 6
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown submenu">
                        <Link
                            className="nav-link d-flex gap-2 align-items-center"
                            aria-current="page"
                            to="404-1.html"
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
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="404-1.html"
                                    aria-label="single-pages"
                                >
                                    <span className="link-hover-animation-1">404 1</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="404-2.html"
                                    aria-label="single-pages"
                                >
                                    <span className="link-hover-animation-1">404 2</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="404-3.html"
                                    aria-label="single-pages"
                                >
                                    <span className="link-hover-animation-1">404 3</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="text-center d-flex justify-content-center px-30">
                {/* author-socials */}
                <div className="author-socials">
                    <Link to="https://www.facebook.com/" className="facebook">
                        <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="https://www.instagram.com/" className="instagram">
                        <i className="fab fa-instagram" />
                    </Link>
                    <Link to="https://www.linkedin.com/" className="linkedin">
                        <i className="fa-brands fa-linkedin-in" />
                    </Link>
                    <Link to="https://www.youtube.com/" className="youtube">
                        <i className="fab fa-youtube" />
                    </Link>
                    <Link to="https://www.pinterest.com/" className="pinterest">
                        <i className="fab fa-pinterest-p" />
                    </Link>
                    <Link to="https://twitter.com/" className="twitter">
                        <svg
                            width={16}
                            height={14}
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M15.8092 15.98H11.1569L6.89801 9.78339L1.56807 15.98H0.19043L6.28619 8.89157L0.19043 0.0195312H4.84276L8.87486 5.88989L13.9234 0.0195312H15.301L9.48808 6.77751L15.8092 15.98ZM11.8079 14.9929H13.9234L4.18054 1.05696H2.06508L11.8079 14.9929Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default OffCanvasMobileMenu