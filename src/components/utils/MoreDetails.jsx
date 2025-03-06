function MoreDetails(){
    return(
        <div className="weather-details flex flex-col items-center gap-8 px-7 py-8 rounded-lg bg-[--secondary-clr] text-white">
            <span className="text-lg font-medium">Weather Details</span>
            <div className="grid justify-center grid-cols-[repeat(auto-fit,min(180px,_100%))] gap-x-4 gap-y-9 w-full ">
                <div className="col wind-speed">
                    <i className="fa-solid fa-wind"></i>
                    <div>
                        <span>Wind Speed</span>
                        <span>10.3mph</span>
                    </div>
                </div>
                <div className="col humidity">
                    <i className="fa-solid fa-droplet"></i>
                    <div>
                        <span>Humidity</span>
                        <span>49%</span>
                    </div>
                </div>
                <div className="col wind-direction">
                    <i className="fa-solid fa-compass"></i>
                    <div>
                        <span>Wind Direction</span>
                        <span>NNE</span>
                    </div>
                </div>
                <div className="col sunrise">
                    <i className="fa-solid fa-sun"></i>
                    <div>
                        <span>Sunrise</span>
                        <span>06:43 AM</span>
                    </div>
                </div>
                <div className="col sunset">
                    <i className="fa-solid fa-sun"></i>
                    <div>
                        <span>Sunset</span>
                        <span>04:57 PM</span>
                    </div>
                </div>
                <div className="col feel-like">
                    <i className="fa-solid fa-temperature-low"></i>
                    <div>
                        <span>Feel Like</span>
                        <span>19.3</span>
                    </div>
                </div>
                <div className="col air-pressure">
                    <i className="fa-solid fa-wind"></i>
                    <div>
                        <span>Air Pressure</span>
                        <span>1025 hpa</span>
                    </div>
                </div>
                <div className="col visibility">
                    <i className="fa-solid fa-eye"></i>
                    <div>
                        <span>Visibility</span>
                        <span>10 Km</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MoreDetails;