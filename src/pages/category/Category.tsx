import { Link, useParams } from "react-router-dom"
import DarkThemeButton from "../../components/dark-theme-button"
import Footer from "../../components/footer"
import Header from "../../components/header"
import OffCanvasMenu from "../../components/OffCanvasMenu"
import OffCanvasMobileMenu from "../../components/OffCanvasMobileMenu"
import OffCanvasSearch from "../../components/OffCanvasSearch"
import CTASection from "../../components/ctaSection/CTASection"
import { ROUTES } from "../../constants/routes"
import { useEffect, useState } from "react"
import { GetAllBlogsByCategory } from "../../services/blogServices"
import { Blog } from "../../interface/blog"
import { toastMessageError } from "../../components/utilities/commonToast/CommonToastMessage"


const Category = () => {
    const { categoryName } = useParams<string>()
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [totalBlogs, setTotalBlogs] = useState<number>(0);
    const [blogsLoading, setBlogsLoading] = useState<boolean>(true)
    // Fetch blogs based on category name
    const fetchBlogs = async () => {
        let name = categoryName?.slice(0, 1).toUpperCase().concat(categoryName?.slice(1).toLowerCase());
        if(name === "Longdrives" ){
            name = "LongDrives"
        }
        setBlogsLoading(true);
        const response = await GetAllBlogsByCategory(name as string);
        console.log(response);  
        if (response.success && response.data) {
            setBlogs(response.data.data as Blog[])
            setTotalBlogs(response.data.total_count);
        }
        else {
            toastMessageError(response.message)
        }
        setBlogsLoading(false);
    }
    useEffect(() => {
        fetchBlogs();
    }, [categoryName])
    console.log(categoryName);
    return (
        <div className="page">
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
                                        <p className="text-white">{totalBlogs?totalBlogs:"0"} articles</p>
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
                                    {!blogsLoading ? blogs.map((blog, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="card card-style-5 wow fadeInUp"
                                                data-wow-delay="0.4s"
                                            >
                                                <div className="row align-items-center  justify-content-center">
                                                    <div className="col-lg-6">
                                                        <div className="card-image-wrapper">
                                                        <Link to={ROUTES.ARTICLE.replace(":articleId",String(blog.id))}>
                                                                {" "}
                                                                <img
                                                                    src={blog.mainImage}
                                                                    data-src={blog.mainImage}
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
                                                            <Link to={ROUTES.CATEGORY.replace(":categoryName", blog.category)}>{blog.category}</Link>
                                                            </div>
                                                            <h2 className="fs-2 card-title">
                                                            <Link to={ROUTES.ARTICLE.replace(":articleId",String(blog.id))} className="blog-title">
                                                                    {blog.title}
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
                                                               {blog.introduction}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* col-6 */}
                                                </div>
                                                {/* row */}
                                            </div>
                                        )
                                    }) :
                                        "Loading..."
                                    }

                                    
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