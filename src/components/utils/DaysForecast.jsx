import { useContext } from "react";
import { LocationData } from "../../context/Data";

function DaysForecast(){
    const {data} = useContext(LocationData);
    const { forecast} = data;
    return(
        <div className="days-forecast flex flex-col gap-2 px-7 py-6 rounded-lg bg-[--secondary-clr] text-white">
            <span className="text-lg font-medium">Days Forecast</span>
            <div className="flex flex-col text-lg">
                {
                    forecast.forecastday.map((dayInfo, index)=>{
                        return (
                        <div key={index} className="row relative flex items-center justify-between py-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:bg-white after:w-full after:translate-x-[-50%] after:h-[1px]">
                            <span>{new Date(dayInfo.date).toLocaleString("en-US",{weekday: "short",})}</span>
                            <div className="inline-flex items-center gap-1">
                                <img src={dayInfo.day.condition.icon} width="35px" alt={`${dayInfo.day.condition.text} Status`} />
                                <span>{dayInfo.day.condition.text}</span>
                            </div>
                            <div>
                                <span>{dayInfo.day.maxtemp_c.toFixed()} /</span>
                                <span className="text-[#c9c8c8]">{dayInfo.day.mintemp_c.toFixed()}</span>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
    </div>
    )
}
export default DaysForecast;