
function CurrentDetails(){
    return(
        <div className="current-details flex flex-col gap-5 bg-transparent text-white">
            <h1 className="text-3xl font-bold">Today</h1>
            <p className="text-sm">Saturday, December 14, 2024</p>
            <img src="/images/weather_app.png" width="90px" alt="" />
            <p className="text-4xl font-semibold">
            <span>19</span>
            <span> ْ</span>
            </p>
            <p className="text-xl font-semibold">
            <span>Cairo,</span>
            <span>Al Qahirah</span>
            </p>
        </div>
    )
}
export default CurrentDetails;