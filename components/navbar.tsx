

import Link from "next/link"

export function NavigationBar ( ) { 
    return (
        <header className="fixed top-0 left-0 sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 backdrop-opacity-50" style={{"background" : "#ffffff40"}}>
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <Link className="flex-none text-xl font-semibold " href="/"> Shizengakari Server</Link>
                <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
                    <Link
                       href="https://discord.gg/49Q7JhCrAK"
                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >サーバーに参加する</Link>
                </div>
            </nav>
        </header>
    )
}