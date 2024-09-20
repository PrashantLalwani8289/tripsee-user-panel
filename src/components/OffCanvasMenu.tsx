import { Link } from "react-router-dom"

const OffCanvasMenu = () => {
    return (
        <div
            className="offcanvas d-none d-lg-block offcanvas-end"
            data-bs-scroll="false"
            tabIndex={-1}
            id="offcanvasDesktop"
        >
            <div className="offcanvas-header justify-content-end">
                <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body">
                <div className="author-about mb-40 ">
                    <div className="text-center">
                        <div className="author-iamge">
                            <Link to="author-1.html">
                                <img
                                    src="assets/images/placeholder.svg"
                                    data-src="assets/images/about-image-1.png"
                                    alt="author-iamge"
                                />
                            </Link>
                        </div>
                        <h5>
                            <Link className="author-name" to="author-1.html">
                                Mike Aiden
                            </Link>
                        </h5>
                        <p className=" text-center">
                            I’m a intrepid travel blogger, weaves tales of exploration and
                            discovery. Let's traverse the globe together and share in the beauty
                            of our world.
                        </p>
                    </div>
                </div>
                <div className="socials-wrapper">
                    <h4 className="offcanvas-title mb-30">Follow Me</h4>
                    {/* author-socials */}
                    <div className="author-socials mb-30">
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
                {/* sidebar-gallery */}
                <div className="sidebar-gallery mb-40">
                    <div className="div1 image-hover">
                        <img
                            src="assets/images/placeholder.svg"
                            data-src="assets/images/instagram/instagram-1.png"
                            alt="instagram"
                        />
                        <span className="d-flex justify-content-center mb-10">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.4396 18H5.56042C2.49391 18 0 15.5061 0 12.4396V5.56042C0 2.49391 2.49391 0 5.56042 0H12.4396C15.5061 0 18 2.49391 18 5.56042V12.4396C18.0016 15.5061 15.5061 18 12.4396 18ZM5.56042 2.00648C3.60126 2.00648 2.00648 3.60126 2.00648 5.56042V12.4396C2.00648 14.3987 3.60126 15.9935 5.56042 15.9935H12.4396C14.3987 15.9935 15.9935 14.3987 15.9935 12.4396V5.56042C15.9935 3.60126 14.3987 2.00648 12.4396 2.00648H5.56042Z"
                                    fill="white"
                                />
                                <path
                                    d="M9.0021 13.5979C6.4656 13.5979 4.40234 11.5347 4.40234 8.99819C4.40234 6.46169 6.4656 4.39844 9.0021 4.39844C11.5386 4.39844 13.6019 6.46169 13.6019 8.99819C13.6019 11.5347 11.5386 13.5979 9.0021 13.5979ZM9.0021 6.203C7.46095 6.203 6.20691 7.45705 6.20691 8.99819C6.20691 10.5393 7.46095 11.7934 9.0021 11.7934C10.5432 11.7934 11.7973 10.5393 11.7973 8.99819C11.7973 7.45705 10.5432 6.203 9.0021 6.203Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.6139 4.13508C14.6139 4.56414 14.2653 4.91278 13.8363 4.91278C13.4072 4.91278 13.0586 4.56414 13.0586 4.13508C13.0586 3.70602 13.4072 3.35742 13.8363 3.35742C14.2653 3.35742 14.6139 3.70444 14.6139 4.13508Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="div2 image-hover">
                        <img
                            src="assets/images/placeholder.svg"
                            data-src="assets/images/instagram/instagram-4.png"
                            alt="instagram"
                        />
                        <span className="d-flex justify-content-center mb-10">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.4396 18H5.56042C2.49391 18 0 15.5061 0 12.4396V5.56042C0 2.49391 2.49391 0 5.56042 0H12.4396C15.5061 0 18 2.49391 18 5.56042V12.4396C18.0016 15.5061 15.5061 18 12.4396 18ZM5.56042 2.00648C3.60126 2.00648 2.00648 3.60126 2.00648 5.56042V12.4396C2.00648 14.3987 3.60126 15.9935 5.56042 15.9935H12.4396C14.3987 15.9935 15.9935 14.3987 15.9935 12.4396V5.56042C15.9935 3.60126 14.3987 2.00648 12.4396 2.00648H5.56042Z"
                                    fill="white"
                                />
                                <path
                                    d="M9.0021 13.5979C6.4656 13.5979 4.40234 11.5347 4.40234 8.99819C4.40234 6.46169 6.4656 4.39844 9.0021 4.39844C11.5386 4.39844 13.6019 6.46169 13.6019 8.99819C13.6019 11.5347 11.5386 13.5979 9.0021 13.5979ZM9.0021 6.203C7.46095 6.203 6.20691 7.45705 6.20691 8.99819C6.20691 10.5393 7.46095 11.7934 9.0021 11.7934C10.5432 11.7934 11.7973 10.5393 11.7973 8.99819C11.7973 7.45705 10.5432 6.203 9.0021 6.203Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.6139 4.13508C14.6139 4.56414 14.2653 4.91278 13.8363 4.91278C13.4072 4.91278 13.0586 4.56414 13.0586 4.13508C13.0586 3.70602 13.4072 3.35742 13.8363 3.35742C14.2653 3.35742 14.6139 3.70444 14.6139 4.13508Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="div3 image-hover">
                        <img
                            src="assets/images/placeholder.svg"
                            data-src="assets/images/instagram/instagram-7.png"
                            alt="instagram"
                        />
                        <span className="d-flex justify-content-center mb-10">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.4396 18H5.56042C2.49391 18 0 15.5061 0 12.4396V5.56042C0 2.49391 2.49391 0 5.56042 0H12.4396C15.5061 0 18 2.49391 18 5.56042V12.4396C18.0016 15.5061 15.5061 18 12.4396 18ZM5.56042 2.00648C3.60126 2.00648 2.00648 3.60126 2.00648 5.56042V12.4396C2.00648 14.3987 3.60126 15.9935 5.56042 15.9935H12.4396C14.3987 15.9935 15.9935 14.3987 15.9935 12.4396V5.56042C15.9935 3.60126 14.3987 2.00648 12.4396 2.00648H5.56042Z"
                                    fill="white"
                                />
                                <path
                                    d="M9.0021 13.5979C6.4656 13.5979 4.40234 11.5347 4.40234 8.99819C4.40234 6.46169 6.4656 4.39844 9.0021 4.39844C11.5386 4.39844 13.6019 6.46169 13.6019 8.99819C13.6019 11.5347 11.5386 13.5979 9.0021 13.5979ZM9.0021 6.203C7.46095 6.203 6.20691 7.45705 6.20691 8.99819C6.20691 10.5393 7.46095 11.7934 9.0021 11.7934C10.5432 11.7934 11.7973 10.5393 11.7973 8.99819C11.7973 7.45705 10.5432 6.203 9.0021 6.203Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.6139 4.13508C14.6139 4.56414 14.2653 4.91278 13.8363 4.91278C13.4072 4.91278 13.0586 4.56414 13.0586 4.13508C13.0586 3.70602 13.4072 3.35742 13.8363 3.35742C14.2653 3.35742 14.6139 3.70444 14.6139 4.13508Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="div4 image-hover">
                        <img
                            src="assets/images/placeholder.svg"
                            data-src="assets/images/instagram/instagram-3.png"
                            alt="instagram"
                        />
                        <span className="d-flex justify-content-center mb-10">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.4396 18H5.56042C2.49391 18 0 15.5061 0 12.4396V5.56042C0 2.49391 2.49391 0 5.56042 0H12.4396C15.5061 0 18 2.49391 18 5.56042V12.4396C18.0016 15.5061 15.5061 18 12.4396 18ZM5.56042 2.00648C3.60126 2.00648 2.00648 3.60126 2.00648 5.56042V12.4396C2.00648 14.3987 3.60126 15.9935 5.56042 15.9935H12.4396C14.3987 15.9935 15.9935 14.3987 15.9935 12.4396V5.56042C15.9935 3.60126 14.3987 2.00648 12.4396 2.00648H5.56042Z"
                                    fill="white"
                                />
                                <path
                                    d="M9.0021 13.5979C6.4656 13.5979 4.40234 11.5347 4.40234 8.99819C4.40234 6.46169 6.4656 4.39844 9.0021 4.39844C11.5386 4.39844 13.6019 6.46169 13.6019 8.99819C13.6019 11.5347 11.5386 13.5979 9.0021 13.5979ZM9.0021 6.203C7.46095 6.203 6.20691 7.45705 6.20691 8.99819C6.20691 10.5393 7.46095 11.7934 9.0021 11.7934C10.5432 11.7934 11.7973 10.5393 11.7973 8.99819C11.7973 7.45705 10.5432 6.203 9.0021 6.203Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.6139 4.13508C14.6139 4.56414 14.2653 4.91278 13.8363 4.91278C13.4072 4.91278 13.0586 4.56414 13.0586 4.13508C13.0586 3.70602 13.4072 3.35742 13.8363 3.35742C14.2653 3.35742 14.6139 3.70444 14.6139 4.13508Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="div5 image-hover">
                        <img
                            src="assets/images/placeholder.svg"
                            data-src="assets/images/instagram/instagram-8.png"
                            alt="instagram"
                        />
                        <span className="d-flex justify-content-center mb-10">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.4396 18H5.56042C2.49391 18 0 15.5061 0 12.4396V5.56042C0 2.49391 2.49391 0 5.56042 0H12.4396C15.5061 0 18 2.49391 18 5.56042V12.4396C18.0016 15.5061 15.5061 18 12.4396 18ZM5.56042 2.00648C3.60126 2.00648 2.00648 3.60126 2.00648 5.56042V12.4396C2.00648 14.3987 3.60126 15.9935 5.56042 15.9935H12.4396C14.3987 15.9935 15.9935 14.3987 15.9935 12.4396V5.56042C15.9935 3.60126 14.3987 2.00648 12.4396 2.00648H5.56042Z"
                                    fill="white"
                                />
                                <path
                                    d="M9.0021 13.5979C6.4656 13.5979 4.40234 11.5347 4.40234 8.99819C4.40234 6.46169 6.4656 4.39844 9.0021 4.39844C11.5386 4.39844 13.6019 6.46169 13.6019 8.99819C13.6019 11.5347 11.5386 13.5979 9.0021 13.5979ZM9.0021 6.203C7.46095 6.203 6.20691 7.45705 6.20691 8.99819C6.20691 10.5393 7.46095 11.7934 9.0021 11.7934C10.5432 11.7934 11.7973 10.5393 11.7973 8.99819C11.7973 7.45705 10.5432 6.203 9.0021 6.203Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.6139 4.13508C14.6139 4.56414 14.2653 4.91278 13.8363 4.91278C13.4072 4.91278 13.0586 4.56414 13.0586 4.13508C13.0586 3.70602 13.4072 3.35742 13.8363 3.35742C14.2653 3.35742 14.6139 3.70444 14.6139 4.13508Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="catagory mb-30">
                    <h3 className="offcanvas-title  mb-40">Category</h3>
                    <div className="catagory-tag">
                        <Link to="category-1.html">
                            Hiking <span className="catagory-count">10</span>
                        </Link>
                        <Link to="category-1.html">
                            Camping <span className="catagory-count">08</span>
                        </Link>
                        <Link to="category-1.html">
                            Desert <span className="catagory-count">12</span>
                        </Link>
                        <Link to="category-1.html">
                            Beach <span className="catagory-count">22</span>
                        </Link>
                        <Link to="category-1.html">
                            Forest <span className="catagory-count">15</span>
                        </Link>
                        <Link to="category-1.html">
                            Ancient <span className="catagory-count">07</span>
                        </Link>
                        <Link to="category-1.html">
                            City <span className="catagory-count">18</span>
                        </Link>
                        <Link to="category-1.html">
                            Lake <span className="catagory-count">09</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OffCanvasMenu