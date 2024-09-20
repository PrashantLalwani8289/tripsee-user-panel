import { Link } from "react-router-dom"
import { ROUTES } from "../../constants/routes"

const Category = () => {
    return (
        <div className="catagory">
            <h3 className="mb-40">Category</h3>
            <div className="catagory-tag">
                <Link to={ROUTES.CATEGORY.replace(":categoryName","HIKING")}>
                    HIKING <span className="catagory-count">10</span>
                </Link>
                <Link to={ROUTES.CATEGORY.replace(":categoryName","CAMPING")}>
                    CAMPING <span className="catagory-count">20</span>
                </Link>
                <Link to={ROUTES.CATEGORY.replace(":categoryName","FOREST")}>
                    FOREST <span className="catagory-count">18</span>
                </Link>
                <Link to={ROUTES.CATEGORY.replace(":categoryName","DESERT")}>
                    DESERT <span className="catagory-count">14</span>
                </Link>
                <Link to={ROUTES.CATEGORY.replace(":categoryName","MARINE")}>
                    MARINE <span className="catagory-count">45</span>
                </Link>
            </div>
        </div>
    )
}

export default Category