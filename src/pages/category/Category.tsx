import { Link, useParams } from "react-router-dom"
import DarkThemeButton from "../../components/dark-theme-button"
import Footer from "../../components/footer"
import Header from "../../components/header"
import OffCanvasMenu from "../../components/OffCanvasMenu"
import OffCanvasMobileMenu from "../../components/OffCanvasMobileMenu"
import OffCanvasSearch from "../../components/OffCanvasSearch"
import CTASection from "../../components/ctaSection/CTASection"
import { ROUTES } from "../../constants/routes"


const Category = () => {
    const { categoryName } = useParams<string>()
    console.log(categoryName);
    return (
        <div className="page">
            <Header/>
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
                {/*Banner Section ======================*/}
                <section className="section-banner category-1 position-relative overlay">
                    <div className="category-wrapper category-wrapper-1 mx-auto position-relative parallax">
                        <div className="container">
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb mb-100">
                                    <li className="breadcrumb-item breadcrumb-style-3">
                                        <Link to={ROUTES.HOME}>Home</Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item breadcrumb-style-3 active"
                                        aria-current="page"
                                    >
                                        Category
                                    </li>
                                </ol>
                            </nav>
                            {/* breadcrumb */}
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="category-title-style-1 text-start category-title-bg-position">
                                        <h2 className="text-white">{categoryName}</h2>
                                        <p className="text-white">10 articles</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/*Banner Section ======================*/}
                {/*Blog Section ======================*/}
                <section className="section-blog py-4 py-sm-5 py-md-60 py-lg-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="d-flex flex-column justify-content-center gap-lg-40 g gap-md-30 gap-10  mb-lg-60 mb-30">
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="article-1.html">
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-1.jpg"
                                                            className="card-img-top"
                                                            alt="camping"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-2.html">camping</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="blog-2.html" className="blog-title">
                                                            Whispers of the Wilderness: A Camping Enthusiast's
                                                            Journal
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 25, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        A Camping Enthusiast's Journal captures the untamed beauty
                                                        of nature through vivid prose and intimate reflections.
                                                        Embark on a journey where every page echoes the serenity
                                                        of the great outdoors...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="article-1.html">
                                                        {" "}
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-2.jpg"
                                                            className="card-img-top"
                                                            alt="nature"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-1.html">Beach</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="article-1.html" className="blog-title">
                                                            Outdoor Oasis: Crafting Camping Experiences Together
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 23, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        Outdoor Oasis invites you to create lasting memories
                                                        through shared camping adventures. Immerse yourselves in
                                                        nature's embrace, crafting unforgettable experiences under
                                                        the open sky. Explore...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="article-1.html">
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-3.jpg"
                                                            className="card-img-top"
                                                            alt="img-top"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-1.html">camping</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="article-1.html" className="blog-title">
                                                            Wilderness Wonders: Expert Tips for Epic Camping
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 22, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        Expert Tips for Epic Camping." Discover invaluable
                                                        insights, from seasoned campers, ensuring a sublime
                                                        outdoor experience amidst the untamed beauty of the
                                                        wilderness...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="article-1.html">
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-4.jpg"
                                                            className="card-img-top"
                                                            alt="camping"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-1.html">camping</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="article-1.html" className="blog-title">
                                                            Epic Trails: manual Unforgettable outdoor Adventures
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 21, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        A Guide to Unforgettable Camping Adventures" is a
                                                        captivating manual that navigates outdoor enthusiasts
                                                        through the world's most breathtaking landscapes, offering
                                                        expert advice and inspiration for...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="article-1.html">
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-5.jpg"
                                                            className="card-img-top"
                                                            alt="Night"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-1.html">camping</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="article-1.html" className="blog-title">
                                                            Sleeping Under Stars: A Guide to Night time Camping
                                                            Delights
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 19, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        Discover the magic of nature's night sky with 'Sleeping
                                                        Under Stars: A Guide to Night time Camping Delights.' This
                                                        enchanting guide offers tips, stories, and stargazing
                                                        techniques for an unforgettable...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="article-1.html">
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-6.jpg"
                                                            className="card-img-top"
                                                            alt="img-top"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-1.html">camping</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="article-1.html" className="blog-title">
                                                            Tent Tales: Creating Lifetime Memories Under the Stars
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 18, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        Tent Tales invites adventurers to craft enduring memories
                                                        beneath the celestial canopy. With stars as witnesses, it
                                                        weaves stories of camaraderie, laughter, and discovery,
                                                        ensuring that each night...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="article-1.html">
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-7.jpg"
                                                            className="card-img-top"
                                                            alt="camping"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-1.html">camping</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="article-1.html" className="blog-title">
                                                            Serenity Seekers: Finding Peace in Nature's Embrace
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 17, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        Find Peace in Nature's Embrace invites you on tranquil
                                                        journey, beckoning you to discover solace within gentle
                                                        whispers of the natural world. Unwind and rejuvenate as
                                                        nature's embrace soothes your...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="blog-2.html">
                                                        {" "}
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-8.jpg"
                                                            className="card-img-top"
                                                            alt="Embrace"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-2.html">camping</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="blog-2.html" className="blog-title">
                                                            Campfire Chronicles: Stories from Nature's Cozy Embrace
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 15, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        Stories from Nature's Cozy Embrace'' weaves tales of the
                                                        great outdoors, capturing the warmth of a campfire's glow
                                                        and the enchanting embrace of nature. Immerse yourself in
                                                        these captivating stories...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="article-1.html">
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-9.jpg"
                                                            className="card-img-top"
                                                            alt="Heights"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-1.html">camping</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="article-1.html" className="blog-title">
                                                            Peak Pursuits: Scaling Heights in the Camping World
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 14, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        Nature's Cozy Embrace invites readers to embark on a
                                                        captivating journey through the wild. This enchanting
                                                        collection weaves tales of adventure, serenity, and the
                                                        timeless magic found within...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                    <div
                                        className="card card-style-5 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="row align-items-center  justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="card-image-wrapper">
                                                    <Link to="article-1.html">
                                                        <img
                                                            src="assets/images/placeholder.svg"
                                                            data-src="assets/images/categories/category-10.jpg"
                                                            className="card-img-top"
                                                            alt="Navigating"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                            <div className="col-lg-6">
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to="category-1.html">camping</Link>
                                                    </div>
                                                    <h2 className="fs-2 card-title">
                                                        <Link to="article-1.html" className="blog-title">
                                                            Survival Strategies: Navigating the Challenges of
                                                            Camping
                                                        </Link>
                                                    </h2>
                                                    <ul className="list-unstyled card-meta lead  small">
                                                        <li>
                                                            By{" "}
                                                            <Link className="fw-bold" to="author-1.html">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 12, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        Survival strategies are crucial when camping, demanding
                                                        resourcefulness and adaptability. From mastering
                                                        fire-building in adverse conditions to efficient food
                                                        storage, navigating camping...
                                                    </p>
                                                </div>
                                            </div>
                                            {/* col-6 */}
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* card card-style-5*/}
                                </div>
                                <div className="load-more-btn wow fadeInUp" data-wow-delay="0.4s">
                                    <Link to="blog-1.html" className="btn btn-secondary">
                                        Load More
                                    </Link>
                                </div>
                                {/* d-flex flex-column */}
                            </div>
                        </div>
                    </div>
                    {/* container */}
                </section>
                {/*Blog Section ======================*/}
                {/*CTA Section ======================*/}
                <CTASection />
                {/*CTA Section ======================*/}
            </div>
            <Footer />
        </div>
    )
}

export default Category