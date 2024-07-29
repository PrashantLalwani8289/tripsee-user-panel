import "../App.css"

const header = () => {
    return (
        <header className="section-header header-1 section-header-style-6 sticky-navbar drop-shadow  py-0">
            <div className="container">
                <nav className="navbar navbar-expand-xl hover-menu">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <a
                            className="navbar-brand dark-light-logo"
                            href="index.html"
                            aria-label="nav-brands"
                        >
                            <img
                                src="assets/images/logo-white.png"
                                className="logo-light img-fluid"
                                alt="logo-white"
                            />
                            <img
                                src="assets/images/logo-dark.png"
                                className="logo-dark"
                                alt="logo-dark"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasmobile-menu"
                            aria-controls="offcanvasmobile-menu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            {/* <span class="navbar-toggler-icon"></span>		 */}
                            {/* <img src="assets/images/placeholder.svg" data-src="assets/images/header-menu.png" alt="menu"> */}
                            <span className="menu-icon">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 12H21M3 6H21M3 18H21"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div className="d-none d-xl-block">
                            <div className="d-flex gap-70 align-items-center">
                                <ul className="gap-20 navbar-nav mb-2 me-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link nav-link-style-2 d-flex gap-2 align-items-center"
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
                                                <a className="dropdown-item" href="index.html" aria-label="single-pages">
                                                    Home 1
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="home-2.html" aria-label="single-pages">
                                                    Home 2
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="home-3.html" aria-label="single-pages">
                                                    Home 3
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="home-4.html" aria-label="single-pages">
                                                    Home 4
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="home-5.html" aria-label="single-pages">
                                                    Home 5
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="home-6.html" aria-label="single-pages">
                                                    Home 6
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link active nav-link-style-2 d-flex gap-2 align-items-center"
                                            aria-current="page"
                                            href="blog-1.html"
                                            aria-label="nav-links"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
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
                                            className="nav-link nav-link-style-2 d-flex gap-2 align-items-center"
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
                                            className="nav-link nav-link-style-2 d-flex gap-2 align-items-center"
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
                                            className="nav-link d-flex nav-link-style-2 gap-2 align-items-center"
                                            aria-current="page"
                                            href="article-1.html"
                                            aria-label="nav-links"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Pages
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
                                        <ul className="dropdown-menu ">
                                            <li className="nav-item dropdown submenu">
                                                <a
                                                    className="dropdown-item  d-flex justify-content-between align-items-center"
                                                    href="article-1.html"
                                                    aria-label="single-pages"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Article
                                                    <span className="dropdown-icon">
                                                        <i className="fa-light fa-angle-right" />
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
                                            <li className="nav-item dropdown submenu ">
                                                <a
                                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                                    href="author-1.html"
                                                    aria-label="single-pages"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Author{" "}
                                                    <span className="dropdown-icon">
                                                        <i className="fa-light fa-angle-right" />
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
                                            <li className="nav-item dropdown submenu ">
                                                <a
                                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                                    href="category-1.html"
                                                    aria-label="single-pages"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Catagory{" "}
                                                    <span className="dropdown-icon">
                                                        <i className="fa-light fa-angle-right" />
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
                                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                                    href="404-1.html"
                                                    aria-label="single-pages"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    404 Page{" "}
                                                    <span className="dropdown-icon">
                                                        <i className="fa-light fa-angle-right" />
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
                                    </li>
                                </ul>
                                <div className="d-flex align-items-center gap-20">
                                    {/* serch-icon */}
                                    <a
                                        className="serch-icon-style-2"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasserch"
                                        aria-controls="offcanvasserch"
                                    >
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 19L13.0001 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                                                stroke=""
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                    {/* menu icon */}
                                    <a
                                        href="#"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasDesktop"
                                        aria-controls="offcanvasDesktop"
                                    >
                                        <span className="menu-icon">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 12H21M3 6H21M3 18H21"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default header