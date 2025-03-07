import { useContext } from "react";
import { LocationData } from "../../context/Data";

function MoreDetails(){
    const {data} =useContext(LocationData)
    const {current, forecast} = data;
    return(
        <div className="weather-details flex flex-col items-center gap-8 px-7 py-8 rounded-lg bg-[--secondary-clr] text-white">
            <span className="text-lg font-medium">Weather Details</span>
            <div className="grid justify-center grid-cols-[repeat(auto-fit,min(180px,_100%))] gap-x-4 gap-y-9 w-full ">
                <div className="col wind-speed">
                    <i className="fa-solid fa-wind"></i>
                    <div>
                        <span>Wind Speed</span>
                        <span>{current.wind_mph}mph</span>
                    </div>
                </div>
                <div className="col humidity">
                    <i className="fa-solid fa-droplet"></i>
                    <div>
                        <span>Humidity</span>
                        <span>{current.humidity}%</span>
                    </div>
                </div>
                <div className="col wind-direction">
                    <i className="fa-solid fa-compass"></i>
                    <div>
                        <span>Wind Direction</span>
                        <span>{current.wind_dir}</span>
                    </div>
                </div>
                <div className="col sunrise">
                    <i className="fa-solid fa-sun"></i>
                    <div>
                        <span>Sunrise</span>
                        <span>{forecast.forecastday[0].astro.sunrise}</span>
                    </div>
                </div>
                <div className="col sunset">
                    <i className="fa-solid fa-sun"></i>
                    <div>
                        <span>Sunset</span>
                        <span>{forecast.forecastday[0].astro.sunset}</span>
                    </div>
                </div>
                <div className="col feel-like">
                    <i className="fa-solid fa-temperature-low"></i>
                    <div>
                        <span>Feel Like</span>
                        <span>{current.feelslike_c}</span>
                    </div>
                </div>
                <div className="col air-pressure">
                    <i className="fa-solid fa-wind"></i>
                    <div>
                        <span>Air Pressure</span>
                        <span>{current.pressure_mb} hpa</span>
                    </div>
                </div>
                <div className="col visibility">
                    <i className="fa-solid fa-eye"></i>
                    <div>
                        <span>Visibility</span>
                        <span>{current.vis_km} Km</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MoreDetails;