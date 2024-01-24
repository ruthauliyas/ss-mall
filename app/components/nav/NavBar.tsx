import Container from "../Container";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
    // const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

    return <div
        className="sticky top-0 w-full bg-blue-500 z-30 shadow-sm">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="font-bold text-2xl text-white">
                        SS Mall
                    </Link>
                    <div className="flex items-center gap-8">
                        <Link href="/home" className="text-white">
                            Home
                        </Link>
                        <Link href="/product" className="text-white">
                            Product
                        </Link>
                        {/* <button 
                            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                            className="text-white flex items-center focus:outline-none"
                        >
                            Products <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </button>
                        {isProductsDropdownOpen && (
                            <div className="absolute top-full mt-1 w-48 bg-white shadow-md rounded-md overflow-hidden">
                                <Link href="/products/category1" passHref>
                                    <a className="block px-4 py-2 hover:bg-gray-100">Category 1</a>
                                </Link>
                                <Link href="/products/category2" passHref>
                                    <a className="block px-4 py-2 hover:bg-gray-100">Category 2</a>
                                </Link>
                            </div>
                        )} */}
                        <Link href="/about" className="text-white">
                            About
                        </Link>
                        <Link href="/pricing" className="text-white">
                            Pricing
                        </Link>
                        <div className="flex items-center gap-4">
                            <a className="text-white">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 w-4 mr-1" />
                            </a>
                            <a className="text-white flex items-center">
                                <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4 mr-1" />
                            </a>
                            <a className="text-white items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div >;
}

export default NavBar;