import { Link } from "react-router-dom"

const OffCanvasSearch = () => {
    return (
        <div
            className="offcanvas offcanvas-top offcanvasserch py-lg-100 py-40"
            data-bs-scroll="false"
            tabIndex={-1}
            id="offcanvasserch"
            data-bs-backdrop="false"
        >
            <div className="offcanvas-header py-0 justify-content-end">
                <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h2 className="serch-modal-title mb-lg-60 mb-30">
                                What are you looking for?
                            </h2>
                            <div className="serch-form mb-lg-60 mb-40">
                                <form action="#">
                                    <div className="d-flex flex-wrap gap-40 justify-content-center">
                                        <input
                                            type="search"
                                            name="search"
                                            className="form-control"
                                            placeholder="Search..."
                                            required
                                        />
                                        <button type="submit" className="btn btn-primary search-btn">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <h2 className="modal-post-title text-start mb-lg-40 mb-30">
                        Recent Searches
                    </h2>
                    <div className="search-tag mb-lg-60 mb-40">
                        <Link to="#">
                            Hike Highs: Elevate Your Spirit with Nature{" "}
                            <span>
                                <i className="fa-light fa-xmark" />{" "}
                            </span>
                        </Link>
                        <Link to="#">
                            Sun, Sand, and Serenity: Beach Bliss{" "}
                            <span>
                                <i className="fa-light fa-xmark" />{" "}
                            </span>
                        </Link>
                        <Link to="#">
                            Secret Lakes: Hidden Gems of Natural Beauty{" "}
                            <span>
                                <i className="fa-light fa-xmark" />{" "}
                            </span>
                        </Link>
                        <Link to="#">
                            Tent Talks: Outdoor Adventures Unleashed{" "}
                            <span>
                                <i className="fa-light fa-xmark" />{" "}
                            </span>
                        </Link>
                        <Link to="#">
                            Beyond Shores: Discovering Idyllic Lake Paradises{" "}
                            <span>
                                <i className="fa-light fa-xmark" />{" "}
                            </span>
                        </Link>
                    </div>
                    <h2 className="modal-post-title text-start mb-lg-40 mb-30">
                        Recent Searches
                    </h2>
                    <div className="row custom-row-gap">
                        <div className="col-xxl-4 col-lg-6">
                            {/* mini-card-style */}
                            <div className="mini-card-style mb-lg-40 mb-30">
                                <div className="card-image-wrapper">
                                    <Link to="article-1.html">
                                        <img
                                            src="assets/images/placeholder.svg"
                                            data-src="assets/images/feature-images/feature-image-1.jpg"
                                            className="card-img-top"
                                            alt="Breakfast"
                                        />{" "}
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title lead fw-extrabold mb-0">
                                        <Link to="article-1.html" className="blog-title">
                                            Quick and Easy Flaky Pastry for Tasty Breakfast
                                        </Link>
                                    </h5>
                                    <ul className="list-unstyled card-meta-style-2 mb-0 extra-small">
                                        <li>
                                            By{" "}
                                            <Link to="author-1.html" className="fw-bold">
                                                Mike Aiden
                                            </Link>
                                        </li>
                                        <li>
                                            January 27, <span className="dynamic-year"> </span>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* mini-card-style */}
                            <div className="mini-card-style mb-lg-40 mb-30">
                                <div className="card-image-wrapper">
                                    <Link to="article-1.html">
                                        {" "}
                                        <img
                                            src="assets/images/placeholder.svg"
                                            data-src="assets/images/feature-images/feature-image-7.jpg"
                                            className="card-img-top"
                                            alt="Stories"
                                        />{" "}
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title lead fw-extrabold mb-0">
                                        <Link to="article-1.html" className="blog-title">
                                            Footprints in the Wilderness: Hiking Stories
                                        </Link>
                                    </h5>
                                    <ul className="list-unstyled card-meta-style-2 mb-0 extra-small">
                                        <li>
                                            By{" "}
                                            <Link to="author-1.html" className="fw-bold">
                                                Mike Aiden
                                            </Link>
                                        </li>
                                        <li>
                                            January 25, <span className="dynamic-year"> </span>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-6">
                            {/* mini-card-style */}
                            <div className="mini-card-style mb-lg-40 mb-30">
                                <div className="card-image-wrapper">
                                    <Link to="article-1.html">
                                        {" "}
                                        <img
                                            src="assets/images/placeholder.svg"
                                            data-src="assets/images/feature-images/feature-image-3.jpg"
                                            className="card-img-top"
                                            alt="Stories"
                                        />{" "}
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title lead fw-extrabold mb-0">
                                        <Link to="article-1.html" className="blog-title">
                                            Lost Treasures: Top 10 Ancient City Sites
                                        </Link>
                                    </h5>
                                    <ul className="list-unstyled card-meta-style-2 mb-0 extra-small">
                                        <li>
                                            By{" "}
                                            <Link to="author-1.html" className="fw-bold">
                                                Mike Aiden
                                            </Link>
                                        </li>
                                        <li>
                                            January 07, <span className="dynamic-year"> </span>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* mini-card-style */}
                            <div className="mini-card-style mb-lg-40 mb-30">
                                <div className="card-image-wrapper">
                                    <Link to="article-1.html">
                                        {" "}
                                        <img
                                            src="assets/images/placeholder.svg"
                                            data-src="assets/images/feature-images/feature-image-4.jpg"
                                            className="card-img-top"
                                            alt="Stories"
                                        />{" "}
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title lead fw-extrabold mb-0">
                                        <Link to="article-1.html" className="blog-title">
                                            Beyond Shores: Discovering Idyllic Lake Paradises
                                        </Link>
                                    </h5>
                                    <ul className="list-unstyled card-meta-style-2 mb-0 extra-small">
                                        <li>
                                            By{" "}
                                            <Link to="author-1.html" className="fw-bold">
                                                Mike Aiden
                                            </Link>
                                        </li>
                                        <li>
                                            January 18, <span className="dynamic-year"> </span>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-6">
                            {/* mini-card-style */}
                            <div className="mini-card-style mb-lg-40 mb-30">
                                <div className="card-image-wrapper">
                                    <Link to="article-1.html">
                                        {" "}
                                        <img
                                            src="assets/images/placeholder.svg"
                                            data-src="assets/images/feature-images/feature-image-5.jpg"
                                            className="card-img-top"
                                            alt="Stories"
                                        />{" "}
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title lead fw-extrabold mb-0">
                                        <Link to="article-1.html" className="blog-title">
                                            Seaside Serenity: Beachside Beauty Uncovered
                                        </Link>
                                    </h5>
                                    <ul className="list-unstyled card-meta-style-2 mb-0 extra-small">
                                        <li>
                                            By{" "}
                                            <Link to="author-1.html" className="fw-bold">
                                                Mike Aiden
                                            </Link>
                                        </li>
                                        <li>
                                            January 15, <span className="dynamic-year"> </span>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* mini-card-style */}
                            <div className="mini-card-style mb-lg-40 mb-30">
                                <div className="card-image-wrapper">
                                    <Link to="article-1.html">
                                        {" "}
                                        <img
                                            src="assets/images/placeholder.svg"
                                            data-src="assets/images/feature-images/feature-image-3.jpg"
                                            className="card-img-top"
                                            alt="Stories"
                                        />{" "}
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title lead fw-extrabold mb-0">
                                        <Link to="article-1.html" className="blog-title">
                                            Lost Treasures: Top 10 Ancient City Sites
                                        </Link>
                                    </h5>
                                    <ul className="list-unstyled card-meta-style-2 mb-0 extra-small">
                                        <li>
                                            By{" "}
                                            <Link to="author-1.html" className="fw-bold">
                                                Mike Aiden
                                            </Link>
                                        </li>
                                        <li>
                                            February 07, <span className="dynamic-year"> </span>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OffCanvasSearch