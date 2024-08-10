import { Link } from "react-router-dom"
import "../App.css"
import { ROUTES } from "../constants/routes"

const header = () => {
    const Catogories = ['Technology', 'Health', 'Travel', 'Education', 'Finance']
    return (
        <header className="section-header header-1 section-header-style-6 sticky-navbar drop-shadow  py-0">
            <div className="container">
                <nav className="navbar navbar-expand-xl hover-menu">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <Link
                            className="navbar-brand dark-light-logo"
                            to={ROUTES.HOME}
                            aria-label="nav-brands"
                        >
                            <img
                                src="assets/images/logo-white.png"
                                className="logo-light img-fluid"
                                alt="logo-white"
                            />
                            <img
                                src="assets/images/logo-white.png"
                                className="logo-dark"
                                alt="logo-dark"
                            />
                        </Link>
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
                                        <Link
                                            className="nav-link d-flex gap-2 align-items-center"
                                            to={ROUTES.HOME}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link active d-flex gap-2 align-items-center"
                                            to={ROUTES.BLOGS}

                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link d-flex gap-2 align-items-center"
                                            to={ROUTES.ABOUT}
                                        >
                                            About

                                        </Link>

                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link
                                            className="nav-link d-flex gap-2 align-items-center"
                                            to={ROUTES.CONTACT}
                                        >
                                            Contact
                                        </Link>

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
                                            Category
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
                                            {
                                                Catogories.map((category, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link className="dropdown-item" to={ROUTES.CATEGORY.replace(":categoryName",category)} aria-label="single-pages">
                                                                {category}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
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