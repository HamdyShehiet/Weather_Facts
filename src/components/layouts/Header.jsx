import { Link } from "react-router-dom"

function Header() {
    return (
    <header className="sticky top-0 z-[10] py-5 bg-[--primary-clr] border-b-[1px] border-[#818181] border-solid">
        <div className="container mx-auto px-3 text-center">
            <Link onClick={()=>{console.log("dddd");
            }} to="/" className="text-[clamp(25px,_5vw,_28px)] font-semibold text-white">Weather News</Link>
        </div>
    </header>
    )
}

export default Header;