
function Error() {
    return (
        <>
        <div className="flex flex-col items-center gap-9 text-white">
            <p className="text-center text-7xl md:text-8xl">Oops!</p>
            <p className="text-center text-lg md:text-xl">404 Country Not Found</p>
            <p className="text-center text-lg md:text-xl">Enter a Valid Country</p>
        </div>
        </>
    )
}

export default Error;