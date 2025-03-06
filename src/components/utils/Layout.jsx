import MoreBtn from "./MoreBtn";
import MoreDetails from "./MoreDetails";
import DaysForecast from "./DaysForecast";
import CurrentDetails from "./CurrentDetails";

function Layout() {
    return (
        <>
            <div className="grid gap-y-7">
                <div className="grid grid-cols-[repeat(auto-fit,min(480px,_100%))] items-center justify-around gap-8">
                    <CurrentDetails />
                    <DaysForecast />
                </div>
                <MoreBtn />
                <MoreDetails />
            </div>
        </>
    )
}

export default Layout;