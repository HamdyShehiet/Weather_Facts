function MoreBtn({onClick , viewMore}){
    return(
        <button onClick={onClick} className="block w-fit mx-auto px-3 py-2 rounded-lg text-base bg-[--darkslategray-clr] text-white">{!viewMore ?" View More" : "View Less"} <i className={`fa-solid  ${!viewMore ? "fa-angle-down" : "fa-angle-up"}`}></i></button>
    )
}
export default MoreBtn;