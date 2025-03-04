import { Link } from "react-router-dom"

function Header() {
    return (
    <header className="sticky top-0 z-[10] py-6 bg-[--bg-color] bg-green-950">
        <div className="container mx-auto px-3 text-center">
            <Link to="/" className="logo text-[clamp(22px,_5vw,_26px)] font-semibold text-[--white-color] ">Weather News</Link>
        </div>
    </header>
    )
}

export default Header;