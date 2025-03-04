function Search() {

    return(
        <div className="flex items-center justify-center flex-wrap gap-5">
            <input type="text" placeholder="Search Here" className="max-w-[500px] w-full p-3 outline-none border-none rounded-[12px] bg-[#24343D] text-white shadow-[10px_10px_30px_0px_rgba(36,52,61,0.3)]"/>
            <button className="p-2.5 rounded-[6px] text-base bg-[--menu-color] text-[--white-color]">Search</button>
        </div>
    )
}
export default Search;