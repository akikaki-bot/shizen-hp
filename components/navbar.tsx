
import { Noto_Sans_JP } from "next/font/google"
const noto = Noto_Sans_JP({ subsets: ["latin"] })
import Link from "next/link"

export function NavigationBar ( ) { 
    return (
        <header className="fixed top-0 left-0 sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 backdrop-opacity-90" style={{"background" : "#ffffff40"}}>
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-row items-center justify-between" aria-label="Global">
                <Link className={`flex-none text-2xl font-semibold ${noto.className}`} href="/"> 自然係サーバー</Link>
                <div className="flex transform-gpu transition-colors items-center flex-row gap-5 sm:justify-end sm:mt-0 sm:pl-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link
                       href="https://discord.gg/49Q7JhCrAK"
                       className={` ${noto.className}`}
                    >サーバーに参加する</Link>
                </div>
            </nav>
        </header>
    )
}