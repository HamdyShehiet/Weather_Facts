function Search({setLocation, onClick}) {

    return(
        <div className="flex items-center justify-center flex-wrap gap-5">
            <input type="text" onChange={(e)=> setLocation(e.target.value)} placeholder="Search Here" className="max-w-[500px] w-full p-3 outline-none border-none rounded-[12px] bg-[--secondary-clr] text-white shadow-[10px_10px_30px_0px_rgba(36,52,61,0.3)]"/>
            <button onClick={onClick} className="px-3 py-2.5 rounded-[6px] bg-[--darkslategray-clr] text-white">Search</button>
        </div>
    )
}
export default Search;