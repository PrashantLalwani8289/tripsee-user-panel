import { Link, useNavigate, useParams } from "react-router-dom"
import DarkThemeButton from "../../components/dark-theme-button"
import Footer from "../../components/footer"
import Header from "../../components/header"
import OffCanvasMenu from "../../components/OffCanvasMenu"
import OffCanvasMobileMenu from "../../components/OffCanvasMobileMenu"
import OffCanvasSearch from "../../components/OffCanvasSearch"
import { useEffect, useState } from "react"
import { Blog } from "../../interface/blog"
import { GetBlog } from "../../services/blogServices"
import { toastMessageError } from "../../components/utilities/commonToast/CommonToastMessage"
import { ROUTES } from "../../constants/routes"
import FsLightbox from 'fslightbox-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Swiper } from 'swiper';
import { Pagination } from "swiper/modules"
import { Controller } from "swiper/modules"
import { Navigation } from "swiper/modules"
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Controller]);


const Article = () => {
    const { articleId } = useParams();
    console.log(articleId)
    const navigate = useNavigate()

    const [blog, setBlog] = useState<Blog>()
    const [loading, setLoading] = useState(false)
    const [toggler, setToggler] = useState(false);

    const [mainSwiper, setMainSwiper] = useState<Swiper| null>(null);
    const [thumbSwiper, setThumbSwiper] = useState<Swiper| null>(null);
    const BlogData = async () => {
        setLoading(true)
        const response = await GetBlog(articleId as unknown as number)
        if (response.success && response.data) {
            setBlog(response.data as Blog)
            setLoading(false)
        }
        else {
            toastMessageError("Unable to fetch the data")
            setLoading(false)
            navigate(ROUTES.BLOGS)
        }
    }
    useEffect(() => {
        console.log("herererererereere in use ");

        BlogData()
    }, [])
    return (
        <div className="page">
            <Header />
            <OffCanvasMenu />
            <OffCanvasMobileMenu />
            <OffCanvasSearch />
            <DarkThemeButton />
            <div
                style={{ marginTop: "-10px" }}
                className="main"
                data-bs-spy="scroll"
                data-bs-target="#navContentmenu"
                data-bs-root-margin="0px 0px -50%"
                data-bs-smooth-scroll="true"
            >
                {/*Banner Section ======================*/}
                <section className="section-banner article-1 position-relative">
                    <div className="article-wrapper article-wrapper-1 mx-auto position-relative parallax">
                        <div className="container">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-100">
                                    <li className="breadcrumb-item">
                                        <Link to={ROUTES.HOME}>Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        {" "}
                                        <Link to={ROUTES.BLOGS}>Blog</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {blog?.title}
                                    </li>
                                </ol>
                            </nav>
                            {/* breadcrumb */}
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <div className="text-center py-30">
                                        <h2 className="section-banner-title text-white pb-30 ">
                                            {blog?.title}
                                        </h2>
                                        <div className="d-flex gap-20 flex-wrap justify-content-center">
                                            <span className="text-white">3 Comments</span>
                                            <span className="text-white">
                                                January 12, <span className="dynamic-year"> </span>.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* container */}
                    </div>
                    {/* category-wrapper */}
                </section>
                {/*Banner Section ======================*/}
                {/*Blog Section ======================*/}
                <section className="section-blog py-4 py-sm-5 py-md-60 py-lg-100">
                    <div className="container">
                        <div className="row justify-content-end custom-row-gap">
                            <div className="col-1 px-0">
                                <div className="sticky-elements">
                                    {/* sticky-elements */}
                                    <div className="sidebar-style d-none d-xl-block">
                                        <div className="author-details mb-lg-60 mb-40">
                                            <p className="text-end mb-0 ">Written by</p>
                                            <h6 className="text-end">
                                                <Link to="author-1.html" className="author-name">
                                                    {/* //todo */}
                                                    Mike Aiden
                                                </Link>
                                            </h6>
                                            <div className="author-image">
                                                <img
                                                    src="assets/images/placeholder.svg"
                                                    data-src="assets/images/about-image-1.png"
                                                    alt="about-image"
                                                />
                                            </div>
                                        </div>
                                        <div className="sidebar-social">
                                            <span>SHARE THIS ARTICLE</span>
                                            <Link to="https://www.facebook.com/" className="facebook">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                            <Link to="https://www.instagram.com/" className="instagram">
                                                <i className="fa-brands fa-instagram" />
                                            </Link>
                                            <Link to="https://www.linkedin.com/" className="linkedin">
                                                <i className="fa-brands fa-linkedin" />
                                            </Link>
                                            <Link to="https://www.pinterest.com/" className="pinterest">
                                                <i className="fa-brands fa-pinterest-p" />
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
                            </div>
                            <div className="col-xl-7">
                                {/* Start article-blog-content */}
                                <div className="article-blog-content mb-lg-0 mb-20">
                                    {/* <p className="mb-30 mb-lg-60">
                                        The third Bearfoot Theory group tour is in the books. Explore Lake
                                        Clark National Park, one of the most remote parks in the country
                                        in this review of my 10-day backpacking trip with Alaska Alpine
                                        Adventures.
                                    </p> */}
                                    <div className="table-of-content table-of-content-style-2">
                                        <div
                                            className="accordion accordion-flush"
                                            id="accordionFlushExample"
                                        >
                                            <div className="accordion-item">
                                                <h2 className="table-of-content-heading">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne"
                                                    >
                                                        Table of content
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseOne"
                                                    className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <ol
                                                            id="navbar-example3"
                                                            className="table-of-content-body"
                                                        >
                                                            <li>
                                                                <h3>
                                                                    <a href="#introduction">Introduction</a>
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <h3>
                                                                    <a href="#traveltipsandhacks">
                                                                        Travel Tips and Hacks
                                                                    </a>
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <h3>
                                                                    <a href="#outdoor-and-adventure">
                                                                        Outdoor and Adventure
                                                                    </a>
                                                                </h3>
                                                                <ul>
                                                                    <li>
                                                                        <h4>
                                                                            <a href="#Kayaking-Chronicles-Paddling-through-PristineWaters">
                                                                                Kayaking Chronicles - Paddling through
                                                                                Pristine Waters
                                                                            </a>
                                                                        </h4>
                                                                    </li>
                                                                    <li>
                                                                        <h4>
                                                                            {" "}
                                                                            <a href="#hiking-havens">
                                                                                Hiking Havens - Trails and Treks in the
                                                                                Alaskan Wilderness
                                                                            </a>
                                                                        </h4>
                                                                    </li>
                                                                    <li>
                                                                        <h4>
                                                                            {" "}
                                                                            <a href="#Camping-by-the-Shores">
                                                                                Camping by the Shores - Sleeping Under the
                                                                                Alaskan Stars
                                                                            </a>
                                                                        </h4>
                                                                    </li>
                                                                    <li>
                                                                        <h4>
                                                                            <a href="#Wildlife-Safari">
                                                                                Wildlife Safari - Encounters with Alaska's
                                                                                Untamed Residents
                                                                            </a>
                                                                        </h4>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <h3>
                                                                    <a href="#photography-and-videography">
                                                                        Photo and Video Gallery
                                                                    </a>
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <h3>
                                                                    <a href="#accommodation-reviews">
                                                                        Accommodation Reviews
                                                                    </a>
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <h3>
                                                                    <a href="#destination">Destination Guides</a>
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <h3>
                                                                    <a href="#travelchallenges">Travel Challenges</a>
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <h3>
                                                                    <a href="#conclusion">Conclusion</a>
                                                                </h3>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-bs-spy="scroll"
                                        data-bs-target="#navbar-example3"
                                        data-bs-offset={0}
                                        data-bs-smooth-scroll="true"
                                        tabIndex={0}
                                    >
                                        <h3 id="introduction" className="mb-10 article-post-heading ">
                                            Introduction
                                        </h3>
                                        <p className="pb-20 pb-lg-30 ">
                                            {blog?.introduction}
                                        </p>
                                        {/* quote */}
                                        <div className="quote mb-10 mb-lg-30 ">
                                            <p>
                                                You can design and create, and build the most wonderful place
                                                in the world. But it takes people to make the dream a reality.
                                            </p>
                                            <span className="quote-author">Walt Disney </span>
                                            <span className="quote-icon">
                                                <svg
                                                    width={70}
                                                    height={56}
                                                    viewBox="0 0 70 56"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1_17489)">
                                                        <path
                                                            d="M69.9997 40.3661C69.9025 48.8919 62.9853 55.8666 54.4855 55.9979C48.1182 56.0954 42.6026 52.4079 40.0241 47.0279C39.6318 46.2103 39.3099 45.3557 39.0618 44.4675C33.1773 25.4374 54.9951 5.98009 61.6944 0.553026C62.7372 -0.291483 64.2628 -0.153535 65.1412 0.862567C65.9325 1.77437 65.9594 3.1202 65.2083 4.06564C57.8519 13.3216 55.317 19.8287 55.3573 24.4079C63.5989 24.9866 70.0936 31.9243 69.9997 40.3661Z"
                                                            fill="#4C9BB3"
                                                            fillOpacity="0.4"
                                                        />
                                                        <path
                                                            d="M31.9333 40.3661C31.8395 48.8919 24.9189 55.8666 16.4225 55.9979C10.0552 56.0954 4.53621 52.4079 1.95777 47.0279C1.56883 46.2103 1.24359 45.3557 0.99547 44.4675C-4.88564 25.4374 16.9288 5.98009 23.628 0.553026C24.6742 -0.291483 26.1964 -0.153535 27.0782 0.862567C27.8662 1.77437 27.893 3.1202 27.1453 4.06564C19.7889 13.3216 17.254 19.8287 17.2943 24.4079C25.5359 24.9866 32.0272 31.9243 31.9333 40.3661Z"
                                                            fill="#4C9BB3"
                                                            fillOpacity="0.4"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_17489">
                                                            <rect width={70} height={56} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="pb-20 pb-lg-30 ">
                                            In this blog post, I share all that we got to see, do, and learn
                                            on this epic adventure, as well as a review of Alaska Alpine
                                            Adventures for those of you looking to explore Alaska’s
                                            backcountry.
                                        </p>
                                        {/* article blog list */}
                                        <h3
                                            id="traveltipsandhacks"
                                            className="mb-10 article-post-heading "
                                        >
                                            Travel Tips and Hacks
                                        </h3>
                                        <ul className="">
                                            <p className="pb-20 pb-lg-30 ">


                                                Here are some travel tips and hacks that we learned on our trip:
                                                {blog?.tips}

                                            </p>

                                        </ul>
                                        <p className="mb-20 mb-lg-30">
                                            By following these travel tips and hacks, you'll be
                                            well-prepared to be immerse yourself in the natural beauty and
                                            tranquillity of Lake Clark, creating memories that will last a
                                            lifetime.
                                        //todo
                                        </p>
                                        <div className="single-blog  pb-20">
                                            {/* single blog */}
                                            <div className="blog-image border-rarius-14">
                                                <img
                                                    src={blog?.photos[0]}
                                                    data-src={blog?.photos[0]}
                                                    className="border-rarius-14"
                                                    alt="img-top"
                                                />
                                            </div>
                                        </div>
                                        {/* single-article-post-style */}
                                        <h3
                                            id="outdoor-and-adventure"
                                            className="mb-10 article-post-heading  "
                                        >
                                            Outdoor and Adventure
                                        </h3>
                                        <p className="mb-lg-30 mb-20 ">
                                            {blog?.adventure}
                                        </p>
                                        <div className="single-article-post-style">
                                            <div className="single-article-post-grid">
                                                <div className="single-article-post-image pb-20">
                                                    <div className="iamge-wrapper border-rarius-14 image-hover-effect">
                                                        <img
                                                            src={blog?.photos[1]}
                                                            data-src={blog?.photos[1]}
                                                            className="card-img-top border-rarius-14"
                                                            alt="img-top"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="single-article-post-content">
                                                    <div className="single-article-post-style">
                                                        <h4
                                                            id="Kayaking-Chronicles-Paddling-through-PristineWaters"
                                                            className="article-post-sub-heading mb-10 mb-md-20"
                                                        >
                                                            Kayaking Chronicles - Paddling through Pristine Waters
                                                        </h4>
                                                        <p className="mb-lg-20 mb-10">
                                                            Embark on an exhilaarataing journey through the Kayaking
                                                            Chronicles of Lake Clark, where is the crystal-clear
                                                            waters beckons adventure seekers to paddle through
                                                            pristine landscape. The allure of the Lake Clark lies
                                                            not just in its transparency but in the sereeeeeenity
                                                            that is envelops each stroke. The Lake Clark's Hiking
                                                            Havens adventureres into an untou realm of rugged
                                                            beauty.
                                                        </p>
                                                        <h4
                                                            id="hiking-havens"
                                                            className=" article-post-sub-heading mb-10"
                                                        >
                                                            Hiking Havens - Trails and Treks in the Alaskan
                                                            Wilderness
                                                        </h4>
                                                        <p className="mb-lg-20 mb-10">
                                                            Lake Clark's Hiking Havens beckon adventure into an
                                                            untouched realm of ruggded beauty. Trails wind through
                                                            vasted tundra, revealing breathtaking vistats of
                                                            snow-capped peaks and pristine lakes.snow-capped peaks
                                                            and pristine lakes.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4
                                            id="Camping-by-the-Shores"
                                            className="article-post-sub-heading mb-10 "
                                        >
                                            Camping by the Shores - Sleeping Under the Alaskan Stars
                                        </h4>
                                        <p className="pb-20 ">
                                            Experience the magic of camping along Lake Clark's pristine
                                            shores. Set up your tent under Alaskan sky, where the midnight
                                            sun illuminates rugged landscapes, creating unforgettable
                                            lakeside memories.
                                        </p>
                                        {/* Photo and Video Gallery */}
                                        {/* article post gallery */}
                                        <div className="article-post-gallery-grid pb-30">
                                            <div className="div1 image-hover-effect">
                                                <img
                                                    src={blog?.photos[0]}
                                                    data-src={blog?.photos[0]}
                                                    className="border-rarius-14"
                                                    alt="img-top"
                                                />
                                            </div>
                                            <div className="div2 image-hover-effect">
                                                <img
                                                    src={blog?.photos[0]}
                                                    data-src={blog?.photos[0]}
                                                    className="border-rarius-14"
                                                    alt="img-top"
                                                />
                                            </div>
                                            <div className="div3 image-hover-effect">
                                                <img
                                                    src={blog?.photos[0]}
                                                    data-src={blog?.photos[0]}
                                                    className="border-rarius-14"
                                                    alt="img-top"
                                                />
                                            </div>
                                        </div>
                                        <p className="mb-lg-30 mb-10">
                                            Experience the magic of camping along Lake Clark's pristine
                                            shores. Set up your tent under the vast Alaskan sky, where the
                                            midnight sun illuminates rugged landscapes, creating
                                            unforgettable lakeside memories.
                                        </p>
                                        <h4
                                            id="Wildlife-Safari"
                                            className="mb-10 article-post-sub-heading "
                                        >
                                            Wildlife Safari - Encounters with Alaska's Untamed Residents
                                        </h4>
                                        <p className="mb-lg-60 mb-md-30 mb-10">
                                            Embark on a wildlife safari at The Lake Clark, Alaska, where is
                                            untamed brown bear roam freely, eagles soar overhead, and moose
                                            graze by the shores—a captivating envvcounter with Alaska's wild
                                            residents. Lake Clark, a haven for outdoor enthusiasts,
                                            concludesss as a realm of unspoiled wilderness. From kayaking
                                            pristine waters to know summiting majestic peaks, it's an
                                            untamed adventure etched in enduring memories.
                                        </p>
                                        <h6
                                            id="photography-and-videography"
                                            className="mb-lg-20 mb-10 article-post-heading "
                                        >
                                            Photo and Video Gallery
                                        </h6>
                                        <FsLightbox
                                            toggler={toggler}
                                            UIFadeOutTime={10000}
                                            sources={blog?.photos}
                                        />
                                        {/* article-slider */}
                                        <div className="article-slider-wrapper-main">
                                            <div className="swiper article-slider-wrapper">
                                                <Swiper
                                                    spaceBetween={20}
                                                    slidesPerView={1}
                                                    loop={true}
                                                    navigation={{
                                                        nextEl: '.swiper-slide-button-next',
                                                        prevEl: '.swiper-slide-button-prev',
                                                    }}
                                                    pagination={{ clickable: true }}
                                                    onSwiper={mainSwiper => setMainSwiper(mainSwiper)}
                                                    controller={{ control: thumbSwiper }}
                                                >
                                                    {blog?.photos?.map((photo, index) => (
                                                        <SwiperSlide key={index} className="border-rarius-14 article-slider-single">
                                                            <img
                                                                className="border-rarius-14"
                                                                src={photo}
                                                                alt={`Image ${index}`}
                                                                onClick={() => setToggler(!toggler)}
                                                            />
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                                <div className="swiper-slide-button-wrapper">
                                                    <div className="swiper-slide-button-prev">
                                                        <i className="fa-solid fa-angle-left" />
                                                    </div>
                                                    <div className="swiper-slide-button-next">
                                                        <i className="fa-solid fa-angle-right" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-md-8">
                                                    <div className="swiper article-slider-thumb-wrapper">
                                                        <Swiper
                                                            spaceBetween={10}
                                                            slidesPerView={4}
                                                            freeMode={true}
                                                            watchSlidesProgress={true}
                                                            loop={true}
                                                            navigation={true}
                                                            onSwiper={setThumbSwiper}
                                                            controller={{ control: mainSwiper }}
                                                        >
                                                            {blog?.photos?.map((image, index) => (
                                                                <SwiperSlide key={index} className="article-slider-thumb-single">
                                                                    <img
                                                                        src={image}
                                                                        alt={`slide-image-${index}`}
                                                                    />
                                                                </SwiperSlide>
                                                            ))}
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* article-slider */}
                                        <h3
                                            id="accommodation-reviews"
                                            className="mb-10 article-post-heading "
                                        >
                                            Accommodation Reviews
                                        </h3>
                                        <p className="mb-lg-30  mb-10">
                                            {blog?.accomodationReview}
                                        </p>
                                        <div className="blog-image-wrapper mb-lg-60 mb-30">
                                            {!loading && blog?.photos.map((image, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={`blog-image image-hover-effect-2`}
                                                    >
                                                        <img
                                                            src={image}
                                                            data-src={image}
                                                            className="full-image border-rarius-14"
                                                            alt="img-top"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <h3
                                            id="destination"
                                            className="article-post-heading mb-lg-20 mb-10 "
                                        >
                                            Destination Guides
                                        </h3>
                                        <p className="mb-lg-60  mb-md-30 mb-10">
                                            {blog?.destinationGuides}
                                        </p>
                                        <div className="google-map pb-40">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9341.018597461838!2d-4.432307619358653!3d54.175565819955594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486384adaa7f6fd3%3A0x1fe2385732f12c3a!2sGroudle%20Beach!5e0!3m2!1sen!2sbd!4v1711792810684!5m2!1sen!2sbd"
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />
                                        </div>
                                        <h3
                                            id="travelchallenges"
                                            className="article-post-heading mb-lg-20"
                                        >
                                            Travel Challenges
                                        </h3>
                                        <p className="mb-lg-20 mb-10">
                                            {blog?.travelChallenges}
                                        </p>

                                        <h3
                                            id="conclusion"
                                            className="article-post-heading mb-lg-20 mb-10 "
                                        >
                                            Conclusion
                                        </h3>
                                        <p className="mb-lg-60  mb-30">
                                            {blog?.conclusion}
                                        </p>
                                    </div>
                                    {/* article content */}
                                </div>
                                {/* END article-blog-content */}
                            </div>
                            <div className="col-xl-4">
                                <div className="sticky-elements">
                                    <div className="d-flex flex-column gap-lg-60 gap-30">
                                        <div className="widget">
                                            <h4 className="fs-1 mb-40">Featured Article</h4>
                                            <div className="d-flex flex-column gap-3 gap-xl-30">
                                                {/* mini-card-style */}
                                                <div
                                                    className="mini-card-style wow fadeInUp"
                                                    data-wow-delay="0.4s"
                                                >
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
                                                <div
                                                    className="mini-card-style wow fadeInUp"
                                                    data-wow-delay="0.4s"
                                                >
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
                                                {/* mini-card-style */}
                                                <div
                                                    className="mini-card-style wow fadeInUp"
                                                    data-wow-delay="0.4s"
                                                >
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
                                                                January 13, <span className="dynamic-year"> </span>.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* mini-card-style */}
                                                <div
                                                    className="mini-card-style wow fadeInUp"
                                                    data-wow-delay="0.4s"
                                                >
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
                                                                January 12, <span className="dynamic-year"> </span>.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* mini-card-style */}
                                                <div
                                                    className="mini-card-style wow fadeInUp"
                                                    data-wow-delay="0.4s"
                                                >
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
                                                                January 04, <span className="dynamic-year"> </span>.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* widget */}
                                        {/* socials */}
                                        <div
                                            className="widget widget-style-2 wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <h4 className="fs-1 mb-3 mb-lg-20 text-white text-center">
                                                Social Link
                                            </h4>
                                            <p className="mb-20 mb-lg-30 text-white text-center">
                                                Follow Me On Social Media
                                            </p>
                                            <div className="social-icons d-flex justify-content-center align-items-center flex-wrap gap-20">
                                                <Link to="https://www.facebook.com/">
                                                    <span className="">
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
                                                    <span className="">
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
                                                <Link to="https://www.youtube.com/">
                                                    <span className="">
                                                        <svg
                                                            width={18}
                                                            height={12}
                                                            viewBox="0 0 18 12"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M14.4105 0.0820312H3.591C1.89275 0.0820312 0.503906 1.47084 0.503906 3.16909V8.83366C0.503906 10.5319 1.89275 11.9207 3.591 11.9207H14.4105C16.1087 11.9207 17.4975 10.5319 17.4975 8.83366V3.16909C17.4975 1.47084 16.1087 0.0820312 14.4105 0.0820312ZM9.47816 7.67723L6.84188 9.30826V6.04617V2.78408L9.47816 4.41514L12.1144 6.04617L9.47816 7.67723Z" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <Link to="https://twitter.com/">
                                                    <span className="">
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
                                                <Link to="https://www.pinterest.com/">
                                                    <span className="">
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
                                                <Link to="https://www.linkedin.com/">
                                                    <span className="">
                                                        <svg
                                                            width={17}
                                                            height={17}
                                                            viewBox="0 0 17 17"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M5.10708 6.41797H1.4502V16.6369H5.10708V6.41797Z" />
                                                            <path d="M6.99243 6.41898H9.8149V7.83861C9.8149 7.83861 10.2489 6.40637 12.8586 6.40637C15.0118 6.40637 16.5533 7.24499 16.5533 9.54945C16.5533 10.8235 16.5533 16.6379 16.5533 16.6379H13.539C13.539 16.6379 13.5558 10.6765 13.5726 10.4931C13.5894 10.3097 13.406 8.80606 11.8701 8.80606C10.3343 8.80606 9.8499 9.90786 9.8499 10.7423C9.8499 11.5767 9.8499 16.6365 9.8499 16.6365H6.99523V6.41898H6.99243Z" />
                                                            <path d="M4.56523 4.4804C5.27928 3.76636 5.27928 2.60864 4.56523 1.8946C3.85119 1.18055 2.69347 1.18055 1.97943 1.8946C1.26538 2.60864 1.26538 3.76636 1.97943 4.4804C2.69347 5.19445 3.85119 5.19445 4.56523 4.4804Z" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div>
                                            {/* social-icons */}
                                        </div>
                                        <div className="catagory">
                                            <h3 className="mb-40">Category</h3>
                                            <div className="catagory-tag">
                                                <Link to="category-1.html">
                                                    HIKING <span className="catagory-count">10</span>
                                                </Link>
                                                <Link to="category-1.html">
                                                    CAMPING <span className="catagory-count">20</span>
                                                </Link>
                                                <Link to="category-1.html">
                                                    FOREST <span className="catagory-count">18</span>
                                                </Link>
                                                <Link to="category-1.html">
                                                    DESERT <span className="catagory-count">14</span>
                                                </Link>
                                                <Link to="category-1.html">
                                                    MARINE <span className="catagory-count">45</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div
                                            className="add-iamge d-none d-xl-block wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <Link to="#">
                                                <img
                                                    src="assets/images/add.png"
                                                    className="img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                {/* mini-card-pagination-wrapper */}
                                <div className="d-flex flex-lg-row flex-column gap-40 py-lg-100 py-md-60 py-30">
                                    {/* card card-style-10 */}
                                    <div className="card card-style-10 card-border">
                                        <div className="d-flex align-items-center gap-lg-20 gap-10 ">
                                            <div className="card-image-wrapper-style-2 image-hover-effect-2">
                                                <Link to="article-1.html">
                                                    <img
                                                        src="assets/images/placeholder.svg"
                                                        data-src="assets/images/feature-images/feature-image-4.jpg"
                                                        alt="img-top"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-body p-0  mt-auto">
                                                <Link
                                                    to="#"
                                                    className="d-flex gap-2 align-items-center mini-card-button-prev text-body mb-2"
                                                >
                                                    <i className="fa-solid fa-arrow-left" />
                                                    <span>Previous</span>
                                                </Link>
                                                <h5 className="card-title lead fw-extrabold">
                                                    <Link to="article-1.html" className="blog-title">
                                                        Quick and Easy Flaky Pastry for Tasty Breakfast
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card card-style-10 */}
                                    {/* card card-style-10 */}
                                    <div className="card card-style-10 card-border">
                                        <div className="d-flex align-items-center gap-lg-20 gap-10 ">
                                            <div className="card-image-wrapper-style-2 image-hover-effect-2">
                                                <Link to="article-1.html">
                                                    <img
                                                        src="assets/images/placeholder.svg"
                                                        data-src="assets/images/feature-images/feature-image-5.jpg"
                                                        alt="img-top"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-body p-0  mt-auto">
                                                <Link
                                                    to="#"
                                                    className="d-flex gap-2 align-items-center mini-card-button-next text-body pb-2"
                                                >
                                                    <span>Next</span> <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                                <h5 className="card-title lead fw-extrabold">
                                                    <Link to="article-1.html" className="blog-title">
                                                        Footprints in the Wilderness: Hiking Stories
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card card-style-10 */}
                                </div>
                                {/* Main Comment */}
                                <div className="comments-wrapper pb-lg-60 pb-30">
                                    <p className="fs-2 fw-bold article-post-heading mb-lg-40 mb-20">
                                        3 Comments
                                    </p>
                                    {/* Main Comment */}
                                    <div className="comment">
                                        {/* Main to Comment */}
                                        <div className="main-comment mb-30">
                                            <div className="d-flex gap-20">
                                                <div className="comment-iamge">
                                                    <img
                                                        src="assets/images/placeholder.svg"
                                                        data-src="assets/images/man-02.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="comment-content">
                                                    <h5>
                                                        <Link to="#" className="comment-name">
                                                            Liam Adams
                                                        </Link>
                                                    </h5>
                                                    <span className="timestamp">
                                                        January 12, <span className="dynamic-year"> </span>. at
                                                        10am
                                                    </span>
                                                    <p>
                                                        Your vivid descriptions and captivating storytelling make
                                                        me feel like I'm right there, exploring each destination
                                                        alongside you. Your travel blog is a constant source of
                                                        inspiration for my own adventures. Keep the amazing
                                                        content coming!
                                                    </p>
                                                    <button type="submit" className="btn btn-reply">
                                                        Reply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reply to Comment */}
                                        <div className="reply mb-30">
                                            <div className="d-flex gap-20">
                                                <div className="comment-iamge">
                                                    <img
                                                        src="assets/images/placeholder.svg"
                                                        data-src="assets/images/about-image-1.png"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="comment-content">
                                                    <h5>
                                                        <Link to="#" className="comment-name">
                                                            Liam Adams <span>(Author)</span>
                                                        </Link>
                                                    </h5>
                                                    <span className="timestamp">
                                                        January 12, <span className="dynamic-year"> </span>. at
                                                        10am
                                                    </span>
                                                    <p>
                                                        Thank you so much for your kind words! It warms my heart
                                                        to know that my travel tales inspire your own adventures.
                                                        Your support means the world, and I'm thrilled to continue
                                                        sharing the journey with you. Stay tuned for more exciting
                                                        experiences ahead
                                                    </p>
                                                    <button type="submit" className="btn btn-reply">
                                                        Reply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Main to Comment */}
                                        <div className="main-comment mb-30">
                                            <div className="d-flex gap-20">
                                                <div className="comment-iamge">
                                                    <img
                                                        src="assets/images/placeholder.svg"
                                                        data-src="assets/images/man-03.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="comment-content">
                                                    <h5>
                                                        <Link to="#" className="comment-name">
                                                            Mike Aiden
                                                        </Link>
                                                    </h5>
                                                    <span className="timestamp">
                                                        January 12, <span className="dynamic-year"> </span>. at
                                                        10am
                                                    </span>
                                                    <p>
                                                        Your vivid descriptions and captivating storytelling make
                                                        me feel like I'm right there, exploring each destination
                                                        alongside you. Your travel blog is a constant source of
                                                        inspiration for my own adventures. Keep the amazing
                                                        content coming!
                                                    </p>
                                                    <button type="submit" className="btn btn-reply">
                                                        Reply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* comment from */}
                                <div className="comment-form-wrapper">
                                    <p className="fs-2 fw-bold article-post-heading mb-lg-40 mb-20">
                                        Join the discussion
                                    </p>
                                    <form className="comment-from">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="Comment">Comments</label>
                                                <textarea
                                                    className="form-control"
                                                    id="Comment"
                                                    rows={5}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="name">
                                                        Name{" "}
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
                                                        className="form-control"
                                                        id="name"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">
                                                        Email{" "}
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
                                                        className="form-control"
                                                        id="email"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="website">Website</label>
                                                    <input type="text" className="form-control" id="website" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-check mb-lg-40 mb-20">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="Check1"
                                            />
                                            <label className="form-check-label" htmlFor="Check1">
                                                Save my name, email, and website in this browser for the next
                                                time I comment.{" "}
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Submit Comments
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* container */}
                </section>
                {/*Blog Section ======================*/}
                <section className="pb-xl-70 pb-lg-60 pb-20">
                    <div className="container">
                        <p className=" fs-1 fw-bold mb-lg-40 mb-30">You Might Also Like</p>
                        <div className="row custom-row-gap">
                            <div className="col-lg-4">
                                {/* single card */}
                                <div
                                    className="card card-style-2 card-border mb-lg-40 mb-20 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="card-image-wrapper">
                                        <Link to="article-1.html">
                                            <img
                                                src="assets/images/placeholder.svg"
                                                data-src="assets/images/blog/explore-image-21.jpg"
                                                className="card-img-top"
                                                alt="Lake"
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-header text-uppercase">
                                            <Link to="category-1.html"> Lake</Link>
                                        </div>
                                        <h5 className="fs-4 card-title">
                                            <Link to="article-1.html" className="blog-title">
                                                Lakeside Wonders: Nature's Peaceful Miracles
                                            </Link>
                                        </h5>
                                        <ul className="list-unstyled card-meta lead  small">
                                            <li>
                                                By{" "}
                                                <Link to="author-1.html" className="blog-author fw-bold">
                                                    Mike Aiden
                                                </Link>
                                            </li>
                                            <li>
                                                January 27, <span className="dynamic-year"> </span>.
                                            </li>
                                        </ul>
                                        <p className="card-text small">
                                            Nature Peaceful Miracle captivate with serene reflection, gentle
                                            ripples, and harmonious symphony. A tranquil haven where beauty
                                            meets tranquility...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    className="card card-style-2 card-border mb-lg-40 mb-20 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="card-image-wrapper">
                                        <Link to="blog-3.html">
                                            {" "}
                                            <img
                                                src="assets/images/placeholder.svg"
                                                data-src="assets/images/blog/explore-image-30.jpg"
                                                className="card-img-top"
                                                alt="Forest"
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-header text-uppercase">
                                            <Link to="category-1.html">Forest</Link>
                                        </div>
                                        <h5 className="fs-4 card-title">
                                            <Link to="article-1.html" className="blog-title">
                                                The Mystic Woods: Nature's Healing Sanctuary
                                            </Link>
                                        </h5>
                                        <ul className="list-unstyled card-meta lead  small">
                                            <li>
                                                By{" "}
                                                <Link to="author-1.html" className="blog-author fw-bold">
                                                    Mike Aiden
                                                </Link>
                                            </li>
                                            <li>
                                                January 23, <span className="dynamic-year"> </span>.
                                            </li>
                                        </ul>
                                        <p className="card-text small">
                                            Nature's Healing Sanctuary invite weary souls to immerse in the
                                            embrace ancient tree, where whispers of the wind and rustling
                                            leaves orchestrate...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    className="card card-style-2 card-border mb-lg-40 mb-20 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="card-image-wrapper">
                                        <Link to="blog-7.html">
                                            {" "}
                                            <img
                                                src="assets/images/placeholder.svg"
                                                data-src="assets/images/blog/explore-image-47.jpg"
                                                className="card-img-top"
                                                alt="img-top"
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-header text-uppercase">
                                            <Link to="category-1.html">Beach</Link>
                                        </div>
                                        <h5 className="fs-4 card-title">
                                            <Link to="article-1.html" className="blog-title">
                                                Seaside Serenity: Beachside Beauty Uncovered
                                            </Link>
                                        </h5>
                                        <ul className="list-unstyled card-meta lead  small">
                                            <li>
                                                By{" "}
                                                <Link to="author-1.html" className="blog-author fw-bold">
                                                    Mike Aiden
                                                </Link>
                                            </li>
                                            <li>
                                                January 23, <span className="dynamic-year"> </span>.
                                            </li>
                                        </ul>
                                        <p className="card-text small">
                                            Beachside Beauty Uncovered invites you to a tranquil escape,
                                            where the rhythmic waves meet the golden shore. Discover
                                            serenity in the embrace...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*CTA Section ======================*/}
                <section className="section-cta wow fadeInUp" data-wow-delay="0.4s">
                    <div className="container">
                        <div className="cta-area pt-lg-60 pb-lg-90 pt-30 pb-30">
                            <div className="col-lg-6">
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
                                            <button type="submit" className="btn btn-secondary">
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
        </div>

    )
}

export default Article