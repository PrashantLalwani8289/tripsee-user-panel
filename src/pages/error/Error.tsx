import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const Error = () => {
    return (
        <div className="page">
            <section className="hero-404 position-relative">
                <div className="hero-404-image position-relative parallax">
                    <div className="container">
                        <div className="hero-404-inner-txt text-center">
                            <h1 className="hero-404-title text-white">404</h1>
                            <p className="text-white mb-30">Oops! Your appear to be lost.</p>
                            <Link to={ROUTES.HOME} className="btn-secondary-2">
                                Take Me Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* start to top button */}
            <div className="scroll_to_top to_top-2">
                <i className="fa-regular fa-angle-up" />
            </div>
            {/* eND to top button */}
            {/* dark-light-Buttons */}
            {/* <DarkThemeButton/>  */}
            {/* dark-light-buttons */}
        </div>

    )
}

export default Error