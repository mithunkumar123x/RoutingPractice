import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const MainHeader = () => {

    return (
        <header className="bg-gray-800 p-4">
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <NavLink 
                        activeClassName=" py-2 px-4 rounded hover:bg-yellow-600 "  to = '/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        activeClassName = "py-2 px-4 rounded hover:bg-green-700 " to='/product'>Product</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/product-detail">Product Detail</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;