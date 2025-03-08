import MoreBtn from "./MoreBtn";
import { useState } from "react";
import MoreDetails from "./MoreDetails";
import DaysForecast from "./DaysForecast";
import CurrentDetails from "./CurrentDetails";
import { LocationData } from "../../context/Data";

function Layout({data}) {
    const [viewMore, setViewMore] = useState(false)
    const show = ()=> setViewMore(!viewMore); 
    return (
        <LocationData.Provider value={{data}}>
            <div className="grid gap-y-7">
                <div className="grid grid-cols-[repeat(auto-fit,min(480px,_100%))] items-center justify-around gap-8">
                    <CurrentDetails />
                    <DaysForecast />
                </div>
                { viewMore && <MoreDetails/> }
                <MoreBtn  onClick={show} viewMore={viewMore}/>
            </div>
        </LocationData.Provider>
    )
}

export default Layout;