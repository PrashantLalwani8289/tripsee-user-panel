import { Link } from "react-router-dom"
import { ROUTES } from "../constants/routes"

const footer = () => {
    const date = new Date()
    return (
        <footer className="section-footer section-footer-2  parallax pt-40 pt-md-60 pt-lg-130">
            <div className="footer-wrapper position-relative py-20 py-lg-60 py-xl-100">
                <div className="container">
                    <div className="footer-top-contents pb-30">
                        <div className="row align-items-center gy-30 gy-lg-0">
                            <div className="col-lg-6">
                                <div className="footer-link-menu-style-2">
                                    <ul className="list-unstyled lead">
                                        <li>
                                            <Link to={ROUTES.HOME}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to={ROUTES.BLOGS}>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to={ROUTES.ABOUT}>About</Link>
                                        </li>
                                        <li>
                                            <Link to={ROUTES.CONTACT}>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* footer-links */}
                            </div>
                            {/* col-6 */}
                            <div className="col-lg-6">
                                <div className="social-icons  d-flex align-items-center justify-content-lg-end gap-20">
                                    <Link to="https://www.facebook.com/">
                                        <span className="text-white">
                                            <svg
                                                width={10}
                                                height={16}
                                                viewBox="0 0 11 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.13046 2.63679V0.036944C9.13046 0.036944 6.47179 0.0117188 6.29118 0.0117188C5.08995 0.0117188 3.36232 1.37817 3.36232 2.92941C3.36232 4.67665 3.36232 5.71267 3.36232 5.71267H0.873047V8.66395H3.32872V15.9876H6.2352V8.63036H8.80428L9.13046 5.74627H6.2688C6.2688 5.74627 6.2688 3.97383 6.2688 3.62803C6.2688 3.11981 6.65242 2.62141 7.22643 2.62141C7.60864 2.62141 9.13046 2.63679 9.13046 2.63679Z" />
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link to="https://www.instagram.com/">
                                        <span className="text-white">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M11.0524 15.9895H4.94685C2.22518 15.9895 0.0117188 13.776 0.0117188 11.0544V4.9488C0.0117188 2.22713 2.22518 0.0136719 4.94685 0.0136719H11.0524C13.7741 0.0136719 15.9875 2.22713 15.9875 4.9488V11.0544C15.9889 13.776 13.7741 15.9895 11.0524 15.9895ZM4.94685 1.79451C3.208 1.79451 1.79256 3.20996 1.79256 4.9488V11.0544C1.79256 12.7932 3.208 14.2087 4.94685 14.2087H11.0524C12.7912 14.2087 14.2067 12.7932 14.2067 11.0544V4.9488C14.2067 3.20996 12.7912 1.79451 11.0524 1.79451H4.94685Z" />
                                                <path d="M8.00046 12.0849C5.7492 12.0849 3.91797 10.2537 3.91797 8.00242C3.91797 5.75116 5.7492 3.91992 8.00046 3.91992C10.2517 3.91992 12.083 5.75116 12.083 8.00242C12.083 10.2537 10.2517 12.0849 8.00046 12.0849ZM8.00046 5.52156C6.63263 5.52156 5.5196 6.63458 5.5196 8.00242C5.5196 9.37025 6.63263 10.4833 8.00046 10.4833C9.3683 10.4833 10.4813 9.37025 10.4813 8.00242C10.4813 6.63458 9.3683 5.52156 8.00046 5.52156Z" />
                                                <path d="M12.982 3.68044C12.982 4.06125 12.6726 4.37069 12.2918 4.37069C11.911 4.37069 11.6016 4.06125 11.6016 3.68044C11.6016 3.29963 11.911 2.99023 12.2918 2.99023C12.6726 2.99023 12.982 3.29823 12.982 3.68044Z" />
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link to="https://twitter.com/">
                                        <span className="text-white">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M15.8092 15.98H11.1569L6.89801 9.78339L1.56807 15.98H0.19043L6.28619 8.89157L0.19043 0.0195312H4.84276L8.87486 5.88989L13.9234 0.0195312H15.301L9.48808 6.77751L15.8092 15.98ZM11.8079 14.9929H13.9234L4.18054 1.05696H2.06508L11.8079 14.9929Z" />
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link to="https://www.youtube.com/">
                                        <span className="text-white">
                                            <svg
                                                width={18}
                                                height={12}
                                                viewBox="0 0 18 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.4095 0.0820312H3.59002C1.89177 0.0820312 0.50293 1.47084 0.50293 3.16909V8.83366C0.50293 10.5319 1.89177 11.9207 3.59002 11.9207H14.4095C16.1078 11.9207 17.4966 10.5319 17.4966 8.83366V3.16909C17.4966 1.47084 16.1078 0.0820312 14.4095 0.0820312ZM9.47718 7.67723L6.8409 9.30826V6.04617V2.78408L9.47718 4.41514L12.1134 6.04617L9.47718 7.67723Z"
                                                    fill="#4C9BB3"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link to="https://www.linkedin.com/">
                                        <span className="text-white">
                                            <svg
                                                width={17}
                                                height={17}
                                                viewBox="0 0 17 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5.10708 6.41797H1.4502V16.6369H5.10708V6.41797Z"
                                                    fill="#4C9BB3"
                                                />
                                                <path
                                                    d="M6.99219 6.41898H9.81465V7.83861C9.81465 7.83861 10.2487 6.40637 12.8583 6.40637C15.0116 6.40637 16.553 7.24499 16.553 9.54945C16.553 10.8235 16.553 16.6379 16.553 16.6379H13.5388C13.5388 16.6379 13.5556 10.6765 13.5724 10.4931C13.5892 10.3097 13.4057 8.80606 11.8699 8.80606C10.3341 8.80606 9.84965 9.90786 9.84965 10.7423C9.84965 11.5767 9.84965 16.6365 9.84965 16.6365H6.99499V6.41898H6.99219Z"
                                                    fill="#4C9BB3"
                                                />
                                                <path
                                                    d="M4.56523 4.4804C5.27928 3.76636 5.27928 2.60864 4.56523 1.8946C3.85119 1.18055 2.69347 1.18055 1.97943 1.8946C1.26538 2.60864 1.26538 3.76636 1.97943 4.4804C2.69347 5.19445 3.85119 5.19445 4.56523 4.4804Z"
                                                    fill="#4C9BB3"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link to="https://www.pinterest.com/">
                                        <span className="text-white">
                                            <svg
                                                width={14}
                                                height={18}
                                                viewBox="0 0 14 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M4.21932 8.5049C4.21932 8.5049 3.5417 6.42445 4.33972 5.28762C5.13774 4.15079 5.81536 4.0052 6.68619 4.22361C7.55701 4.44201 7.77542 5.57882 7.58081 6.54625C7.38761 7.51367 6.8794 9.23153 6.8556 9.49753C6.8318 9.76354 6.7828 10.5378 7.53322 10.8528C8.28364 11.1678 9.49327 10.78 10.1219 9.49753C10.7505 8.2151 10.9927 6.49724 10.8961 5.84483C10.7995 5.19101 10.7029 3.57118 8.76664 2.84456C6.83039 2.11794 5.29595 2.83617 4.92074 3.06718C4.36073 3.41159 3.30089 4.1956 2.86688 5.23583C2.59668 5.88405 2.49729 6.63306 2.56449 7.18467C2.64009 7.80629 2.9607 8.45591 3.2267 8.73452C3.49271 9.01313 3.3961 9.30292 3.3597 9.52132C3.3233 9.73973 3.2421 10.3445 3.0335 10.57C2.82349 10.7954 2.37967 10.8247 2.20187 10.7365C2.02406 10.6483 1.18826 10.2116 0.695443 9.35893C0.18163 8.46711 -0.0367782 7.08387 0.325831 5.29462C0.688441 3.50398 2.18787 1.89954 3.78251 1.10292C5.36875 0.310501 7.28401 -0.0871181 9.07466 0.429495C10.8653 0.946109 12.4445 1.92612 13.3154 3.81337C14.1862 5.70062 13.8236 8.14369 13.412 9.28192C13.0004 10.4188 12.2583 11.718 10.8555 12.5076C9.45266 13.2986 8.22623 13.2818 7.82302 13.1852C7.41981 13.0886 6.48459 12.7988 6.06458 12.3298C6.06458 12.3298 5.46816 14.6525 5.22596 15.2811C4.98375 15.9097 4.56934 16.9387 4.20533 17.3251C3.84272 17.7115 3.67332 17.846 3.33451 17.797C2.9957 17.748 2.8025 17.4455 2.7423 16.5383C2.68209 15.6311 3.12869 13.0228 3.3065 12.264C3.4857 11.5052 4.13112 8.86051 4.21932 8.5049Z" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                                {/* social-icons */}
                            </div>
                            {/* col-6 */}
                        </div>
                        {/* row */}
                    </div>
                    {/* footer-top-contents */}
                    <div className="footer-bottom-contents mt-30 text-white">
                        <div className="d-flex flex-column flex-sm-row gap-3 gap-lg-0 align-items-lg-center justify-content-lg-between justify-content-center">
                            <div className="d-flex justify-content-center gap-10">
                                <p className="mb-0 lead">A product of</p>
                                <Link
                                    className="footer-logo"
                                    to="index.html"
                                    aria-label="nav-brands"
                                >
                                    Tripsee
                                </Link>
                            </div>
                            <p className="mb-0 text-center lead">
                                © <span className="dynamic-year">{date.getFullYear()}</span>. Tripsee. All rights
                                reserved
                            </p>
                        </div>
                    </div>
                    {/* footer-bottom-contents */}
                </div>
                {/* container */}
            </div>
        </footer>

    )
}

export default footer