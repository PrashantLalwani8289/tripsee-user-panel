import Header from '../../components/header'
import Footer from '../../components/footer'
import DarkThemeButton from '../../components/dark-theme-button'
import OffCanvasMenu from '../../components/OffCanvasMenu'
import OffCanvasMobileMenu from '../../components/OffCanvasMobileMenu'
import OffCanvasSearch from '../../components/OffCanvasSearch'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ROUTES } from '../../constants/routes'
import { Link } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { ctaSection } from '../../interface/extra'
import { yupResolver } from '@hookform/resolvers/yup'
import { ctaValidation } from '../../validation/userValidation'
import { GetAllBlogs } from '../../services/blogServices'
import { useEffect, useState } from 'react'
import { Blog } from '../../interface/blog'
import HeroSlider from '../../components/HeroSlider'
const Home = () => {
    // const Catogories = ["Beach", "Camping", "Hiking", "Desert", "Forest", "LongDrives", "FamilyTrips"]
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [blogsLoading, setBlogsLoading] = useState<boolean>(true)
    const { control, handleSubmit, formState: { errors } } = useForm<ctaSection>({
        mode: "onChange",
        resolver: yupResolver(ctaValidation())
    })
    const handleClick = (data: ctaSection) => {
        console.log(data)
    }
    const ScrollToTop = () => {
        window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enable smooth scrolling
    });
    };

    const getAllBlogs = async () => {
        setBlogsLoading(true)
        const response = await GetAllBlogs()
        if (response.success && response.data) {
            setBlogs(response.data as Blog[])
            setBlogsLoading(false)
        }
        else {
            console.error(response.message)
            setBlogsLoading(false)
        }

    }

    useEffect(() => {
        ScrollToTop()
        getAllBlogs()
    }, [])


    return (
        <div className='page'>
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
                {/*Hero Section ======================*/}
                <HeroSlider/>

                <section className="section-blog py-4 py-sm-5 py-md-60 py-lg-100">
                    <div className="container">
                        <div className="row custom-row-gap">
                            <div className="col-xl-4 order-xl-1">
                                <div className="sticky-elements">
                                    <div className="d-flex flex-row flex-xl-column justify-content-center gap-lg-60 gap-30 pb-30  pb-lg-0 ml-lg-0">
                                        <div className="widget wow fadeInUp" data-wow-delay="0.3s">
                                            <h4 className="fs-1 mb-40">Featured Article</h4>
                                            <div className="d-flex flex-column gap-3 gap-xl-30">

                                                {/* mini-card-style */}
                                                {blogs && !blogsLoading && (
                                                    blogs.slice(0, 4).map((blog, index) => {
                                                        return (
                                                            <div
                                                                className="mini-card-style wow fadeInUp"
                                                                data-wow-delay="0.4s"
                                                                key={index}
                                                            >
                                                                <div className="card-image-wrapper">
                                                                    <Link to={ROUTES.ARTICLE.replace(":articleId",String(blog.id))}>
                                                                        <img
                                                                            src={blog.mainImage}
                                                                            data-src={blog.mainImage}
                                                                            className="card-img-top"
                                                                            alt="Breakfast"
                                                                        />{" "}
                                                                    </Link>
                                                                </div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title lead fw-extrabold mb-0">
                                                                        <Link to={ROUTES.ARTICLE.replace(":articleId",String(blog.id))} className="blog-title">
                                                                            {blog.title}
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
                                                        )
                                                    })
                                                )}
                                            </div>
                                        </div>
                                        {/* widget */}
                                        <div className="d-none d-lg-block">
                                            <div className="d-flex flex-column gap-60">
                                                <div
                                                    className="widget widget-style-1  wow fadeInUp"
                                                    data-wow-delay="0.3s"
                                                >
                                                    <h4 className="fs-1 mb-3 mb-lg-20">Newsletter</h4>
                                                    <p className="mb-4 mb-lg-30">
                                                        Make sure to subscribe to our newsletter and be first to
                                                        get latest updates and news.
                                                    </p>
                                                    <form onSubmit={handleSubmit(handleClick)} >
                                                        <div className="contact-form d-flex flex-column gap-20">
                                                            <div>
                                                                <Controller
                                                                    control={control}
                                                                    name="email"
                                                                    rules={{ required: "Email is required" }}
                                                                    render={({ field }) => (
                                                                        <input
                                                                            {...field}
                                                                            type="email"
                                                                            className="form-control"
                                                                        />
                                                                    )}


                                                                />
                                                            </div>
                                                            {errors && errors.email && <div style={{ marginTop: "-15px" }}>Enter a valid email</div>}
                                                            <div className="text-center">
                                                                <button type="submit" className="btn btn-xl btn-primary">
                                                                    Subscribe
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* widget */}
                                                <div
                                                    className="widget widget-style-2  wow fadeInUp"
                                                    data-wow-delay="0.3s"
                                                >
                                                    <h4 className="fs-1 mb-3 mb-lg-30 text-white">Lets Talk</h4>
                                                    <p className="mb-20 mb-lg-40 text-white">
                                                        We are a team always open to discuss your project and
                                                        improve your online presence.
                                                    </p>
                                                    <div className="social-icons d-flex flex-wrap align-items-center gap-20">
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
                                                {/* widget */}
                                                <div
                                                    className="add d-lg-none d-xl-block  wow fadeInUp"
                                                    data-wow-delay="0.3s"
                                                >
                                                    <Link to="#">
                                                        <img
                                                            src="assets/images/add.png"
                                                            className="img-fluid"
                                                            alt="add-image"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* d-flex flex-column */}
                            </div>
                            {/* col-4 */}
                            <div className="col-xl-8 order-xl-0">
                                <div className="d-flex flex-column">
                                    {/* card-style-1 */}
                                    {blogs && !blogsLoading && blogs.slice(4).map((blog, index) => {
                                        return (
                                            <div
                                                className="card card-style-1 mb-lg-30 md-mb-20 mb-10  wow fadeInUp"
                                                data-wow-delay="0.3s"
                                                key={index}
                                            >
                                                <div className="card-image-wrapper">
                                                    <Link to={ROUTES.ARTICLE.replace(":articleId",String(blog.id))}>
                                                        {" "}
                                                        <img
                                                            src={blog.mainImage}
                                                            data-src={blog.mainImage}
                                                            className="card-img-top"
                                                            alt="beach"
                                                        />{" "}
                                                    </Link>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-header text-uppercase">
                                                        <Link to={ROUTES.CATEGORY.replace(":categoryName", String(blog.category))} className="fs-6 card-header-title">
                                                            {blog.category} 
                                                        </Link>
                                                    </div>
                                                    <h5 className="fs-1 card-title ">
                                                        <Link to="article-1.html" className="blog-title">
                                                            {blog.title}
                                                        </Link>
                                                    </h5>
                                                    <ul className="list-unstyled card-meta lead ">
                                                        <li>
                                                            By{" "}
                                                            <Link to={ROUTES.ARTICLE.replace(":articleId",String(blog.id))} className="blog-author fw-bold">
                                                                Mike Aiden
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            January 20, <span className="dynamic-year"> </span>.
                                                        </li>
                                                    </ul>
                                                    <p className="card-text">
                                                        {blog.introduction.substring(0,25)}...
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                 
                                </div>
                                <div
                                    className="load-more-btn d-flex justify-content-lg-end wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <Link to="blog-1.html" className="btn btn-secondary">
                                        Load More
                                    </Link>
                                </div>
                            </div>
                            {/* col-8 */}
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </section>
                {/*Blog Section ======================*/}
                <div className="d-block d-lg-none py-30">
                    <div className="container">
                        <div className="d-flex flex-column gap-30">
                            <div className="widget widget-style-1">
                                <h4 className="fs-1 mb-3 mb-lg-20">Newsletter</h4>
                                <p className="mb-4 mb-lg-30">
                                    Make sure to subscribe to our newsletter and be first to get latest
                                    updates and news.
                                </p>
                                <form onSubmit={handleSubmit(handleClick)} >
                                    <div className="contact-form d-flex flex-column gap-20">
                                        <div>
                                            <Controller
                                                control={control}
                                                name="email"
                                                rules={{ required: "Email is required" }}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        type="email"
                                                        className="form-control"
                                                    />
                                                )}


                                            />
                                        </div>
                                        {errors && errors.email && <div>Enter a valid email</div>}
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-xl btn-primary">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* widget */}
                            <div
                                className="widget widget-style-2 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <h4 className="fs-1 mb-3 mb-lg-30 text-white">Lets Talk</h4>
                                <p className="mb-20 mb-lg-40 text-white">
                                    We are a team always open to discuss your project and improve your
                                    online presence.
                                </p>
                                <div className="social-icons d-flex flex-wrap align-items-center gap-20">
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
                                    <Link to="#">
                                        <span className="text-white">
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
                                    <Link to="#">
                                        <span className="text-white">
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
                            {/* widget */}
                        </div>
                        {/* d-flex */}
                    </div>
                    {/* container */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home