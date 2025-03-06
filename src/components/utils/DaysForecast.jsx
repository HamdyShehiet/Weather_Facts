function DaysForecast(){
    return(
        <div className="days-forecast flex flex-col gap-2 px-7 py-6 rounded-lg bg-[--secondary-clr] text-white">
            <span className="text-lg font-medium">Days Forecast</span>
            <div className="flex flex-col text-lg">
                <div className="row relative flex items-center justify-between py-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:bg-white after:w-full after:translate-x-[-50%] after:h-[1px]">
            <span>sat</span>
            <div className="inline-flex items-center gap-3">
                <img src="/images/weather_app.png" width="35px" alt="" />
                <span>Sunny</span>
            </div>
            <div><span>21/</span><span>12</span></div>
                </div>
                <div className="row relative flex items-center justify-between py-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:bg-white after:w-full after:translate-x-[-50%] after:h-[1px]">
            <span>sat</span>
            <div className="inline-flex items-center gap-3">
                <img src="/images/weather_app.png" width="35px" alt="" />
                <span>Sunny</span>
            </div>
            <div><span>21/</span><span>12</span></div>
                </div>
                <div className="row relative flex items-center justify-between py-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:bg-white after:w-full after:translate-x-[-50%] after:h-[1px]">
            <span>sat</span>
            <div className="inline-flex items-center gap-3">
                <img src="/images/weather_app.png" width="35px" alt="" />
                <span>Sunny</span>
            </div>
            <div><span>21/</span><span>12</span></div>
                </div>
            </div>
    </div>
    )
}
export default DaysForecast;