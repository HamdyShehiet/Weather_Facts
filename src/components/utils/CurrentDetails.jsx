import { useContext } from "react";
import { LocationData } from "../../context/Data";

function CurrentDetails(){
    const {data} = useContext(LocationData)
    const { location, current } = data ;
    const localDate = new Date().toLocaleString("en-US",{
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return(
        <div className="current-details flex flex-col items-center lg:items-start gap-4 bg-transparent text-white">
            <h1 className="text-3xl font-bold">Today</h1>
            <p className="text-base font-semibold">{localDate}</p>
            <img src={current.condition.icon} width="90px" alt="" />
            <p className="text-4xl font-semibold">
                <span>{current.temp_c.toFixed()}</span>
                <span> ْ</span>
            </p>
            <p className="text-xl font-semibold">
                <span>{location.name},</span>
                <span>{location.region}</span>
            </p>
        </div>
    )
}
export default CurrentDetails;