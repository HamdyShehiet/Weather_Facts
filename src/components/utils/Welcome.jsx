
function Welcome() {
    return (
        <>
            <div className="welcome flex flex-col items-center gap-6 text-white">
                <h1 className="text-center text-[clamp(20px,_5vw,_30px)] font-semibold">Welcome To Weather News</h1>
                <p className="text-center text-base md:text-xl font-semibold">Enter a Country Name</p>
                <img src="/images/weather_app.png" alt="Weather Image" width="140px"/>
            </div>
        </>
    )
}

export default Welcome;