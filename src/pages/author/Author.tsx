import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import CTASection from "../../components/ctaSection/CTASection"
import DarkThemeButton from "../../components/dark-theme-button"
import Footer from "../../components/footer"
import Header from "../../components/header"
import OffCanvasMenu from "../../components/OffCanvasMenu"
import OffCanvasMobileMenu from "../../components/OffCanvasMobileMenu"
import OffCanvasSearch from "../../components/OffCanvasSearch"
import { GetUser, GetUserBlogs } from "../../services/userServices"
import { Blog } from "../../interface/blog"
import { ROUTES } from "../../constants/routes"

const Author = () => {
    const { authorId } = useParams()
    const navigate = useNavigate()
    console.log(authorId)
    // const [userData, setUserData] = useState()
    const [userBlogsData, setUserBlogsData] = useState<Blog[]>([])

    const fetchAuthorData = async () => {
        const response = await GetUser(authorId as unknown as number)
        if (response.success) {
            console.log(response.data)
        } else {
            console.error('Error fetching data')
            navigate(ROUTES.HOME)
            
        }
    }

    const fetchAuthorBlogs = async () => {
        const response = await GetUserBlogs(authorId as unknown as number)
        if (response.success) {
            setUserBlogsData(response.data as Blog[])
            // console.log(response.data)
        } else {
            console.error('Error fetching Blogs data')
            navigate(ROUTES.HOME)
        }
    }


    useEffect(() => {
        fetchAuthorData()
        fetchAuthorBlogs()
    }, [authorId])





    return (
        <>
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
                style={{ marginTop: "7.5rem" }}
            >
                {/*breadcrumb Section ======================*/}
                <div className="section-breadcrumb ">
                    <div className="breadcrumb-wrapper py-0">
                        <div className="container">
                            <nav aria-label="breadcrumb-nav">
                                <ol className="breadcrumb breadcrumb-style-2 mt-20 mb-0 ">
                                    <li className="breadcrumb-item breadcrumb-item-style-2">
                                        <Link to="index.html">Home</Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item breadcrumb-item-style-2 active"
                                        aria-current="page"
                                    >
                                        Author
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/* breadcrumb-wrapper */}
                </div>
                {/*breadcrumb Section ======================*/}
                {/* author-card ======================*/}
                <div className="author-card-wrapper">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                {/* author-card */}
                                <div className="author-card author-card-2 border-bottom pt-lg-70 pt-40 pb-lg-40 pb-20 mb-lg-40 mb-20 rounded-0 custom-padding">
                                    <div className="author-top-area flex-column">
                                        <div className="author-image">
                                            <img src="assets/images/about-image-1.png" alt="author-image" />
                                        </div>
                                        <h4 className="mb-0">
                                            <Link to="#" className="author-name border-0">
                                                {"User Name here"}
                                            </Link>
                                        </h4>
                                        <div className="author-socials mb-1 mb-10">
                                            <Link to="https://www.facebook.com/" className="facebook">
                                                <i className="fab fa-facebook-f" />
                                            </Link>
                                            <Link to="https://www.instagram.com/" className="instagram">
                                                <i className="fab fa-instagram" />
                                            </Link>
                                            <Link to="https://www.linkedin.com/" className="linkedin">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </Link>
                                            <Link to="https://www.pinterest.com/" className="pinterest">
                                                <i className="fab fa-pinterest-p" />
                                            </Link>
                                            <Link to="https://www.youtube.com/" className="youtube">
                                                <i className="fa-brands fa-youtube" />
                                            </Link>
                                        </div>
                                        <p className="fs-4 fw-bold">{userBlogsData.length} articles</p>
                                    </div>
                                    <div className="author-content">
                                        <p className="text-center">
                                            Hello, I'm Mike Aiden, a passionate travel blogger with a heart
                                            full of wanderlust. Armed with a camera and a curiosity for the
                                            unknown, I traverse the globe, seeking out hidden gems and
                                            sharing the stories they hold. From remote landscapes to
                                            bustling cityscapes, my goal is to inspire others to embark on
                                            their own adventures and embrace the beauty of diverse cultures.
                                            Join me as I explore the world one destination at a time,
                                            capturing moments and weaving tales that ignite the spirit of
                                            exploration. Let's wander together through the pages of my
                                            travel chronicles! 🌍✈️
                                        </p>
                                    </div>
                                </div>
                                {/* author-card */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* author-card ======================*/}
                {/*Blog Section ======================*/}
                <section className="section-blog py-4 pb-sm-5 pb-md-60 pb-lg-100">
                    <div className="container">
                        <div className="row custom-row-gap">
                            {/* single card */}
                            {userBlogsData && userBlogsData.map((blog, index) => {
                                return (
                                    <div className="col-lg-6" key={index}>
                                        <div className="card card-style-2 card-border mb-lg-40 mb-20 ">
                                            <div className="card-image-wrapper  card-image-wrapper-style-3">
                                                <Link to={ROUTES.ARTICLE.replace(":articleId", String(blog.id))}>
                                                    <img
                                                        src={blog.mainImage}
                                                        data-src={blog.mainImage}
                                                        className="card-img-top"
                                                        alt="img-top"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-header text-uppercase">
                                                    <Link to={ROUTES.CATEGORY.replace(":categoryName", blog.category)}>{blog.category}</Link>
                                                </div>
                                                <h2 className="fs-2 card-title">
                                                    <Link to={ROUTES.ARTICLE.replace(":articleId", String(blog.id))} className="blog-title">
                                                        {blog.title}
                                                    </Link>
                                                </h2>
                                                <ul className="list-unstyled card-meta lead  small">
                                                    <li>
                                                        By{" "}
                                                        <Link to={ROUTES.AUTHOR.replace(":authorId", String(blog.user_id))} className="blog-author fw-bold">
                                                            {`Author Name --- and his id is ${authorId}`}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        January 27, <span className="dynamic-year"> </span>.
                                                    </li>
                                                </ul>
                                                <p className="card-text">
                                                    {blog.introduction}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="load-more-btn pt-20 wow fadeInUp" data-wow-delay="0.4s">
                                <Link to="blog-1.html" className="btn btn-secondary">
                                    Load More
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* container */}
                </section>
                {/*Blog Section ======================*/}
                {/*add banner ======================*/}
                <div
                    className="section-banner pb-40 pb-lg-100 d-lg-block d-none wow fadeInUp"
                    data-wow-delay="0.4s"
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="add-banner">
                                    <Link to="#">
                                        <img
                                            src="assets/images/add-02.png"
                                            alt="add-image"
                                            className="border-rarius-14"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Add banner ======================*/}
                {/*CTA Section ======================*/}
                <CTASection />
                {/*CTA Section ======================*/}
            </div>
            <Footer />
        </>
    )
}

export default Author