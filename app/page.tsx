import { Noto_Sans_JP } from "next/font/google"
import { UserIcons } from "@/components/userIcons"
import Image from "next/image"
import Link from "next/link"

const noto = Noto_Sans_JP({ subsets: ["latin"] })

export default function Home() {

    return (
        <main className={`flex flex-col w-full min-h-screen px-2 sm:px-24 ${noto.className}`}>
            <div className={`flex flex-col w-full min-h-screen h-screen px-12 sm:px-24 ${noto.className}`}>
                <div className="absolute top-0 left-0 min-h-screen w-full overflow-hidden">
                    <div className="absolute rotate-6 top-0 left-0 w-[400px] h-[400px] -z-10 transform-gpu rounded-xl bg-green-500 opacity-30 sm:block hidden" />
                    <div className="absolute -rotate-12 top-[270px] left-[110px] w-[400px] h-[400px] -z-20 transform-gpu rounded-2xl bg-green-400 opacity-20 animate-kurukuru-div " />
                    <div className="absolute rotate-6 top-[450px] left-[300px] w-[300px] h-[300px] -z-30 transform-gpu rounded-2xl bg-green-200 opacity-40 animate-kurukuru-30-div sm:block hidden" />
                    <UserIcons />
                </div>
                <div className="transform-gpu transition-all flex flex-col w-full lg:w-[65%] min-h-full items-center justify-center gap-6">
                    <h1 className="text-3xl xl:text-5xl"> ここは... </h1>
                    <h1 className="text-4xl xl:text-6xl font-semibold animate-focus-in-expand-fwd ">
                        <span className="font-bold">『あなた』</span> の<span className="text-green-500 ">居</span>場所
                    </h1>
                </div>
            </div>
            <div className={`flex flex-col w-full min-h-screen sm:px-12 lg:px-24 items-center justify-center ${noto.className}`}>
                <div className="absolute left-0 min-h-screen w-full overflow-hidden -z-10">
                    <div className="absolute rotate-6 top-0 right-0 w-[400px] h-[400px] -z-10 transform-gpu rounded-xl bg-cyan-500 opacity-30 sm:block hidden" />
                    <div className="absolute -rotate-12 top-[270px] right-[110px] w-[400px] h-[400px] -z-20 transform-gpu rounded-2xl bg-cyan-400 opacity-20 animate-kurukuru-div " />
                    <div className="absolute rotate-6 top-[450px] right-[300px] w-[300px] h-[300px] -z-30 transform-gpu rounded-2xl bg-cyan-200 opacity-40 animate-kurukuru-30-div " />
                </div>
                <h1 className="text-4xl font-semibold py-6"> What is <span className="text-green-400">S</span> Server ? </h1>
                <div className="flex flex-col xl:flex-row w-full min-h-full gap-6 justify-center">
                    <div className="flex flex-col max-w-full shadow-lg py-4 px-6 max-h-[500px] rounded-xl xl:w-[400px] bg-white opacity-90">
                        <h1 className="text-2xl font-semibold text-center p-4"> 絶えない会話、にぎわう雑談 </h1>
                        <p className="">
                            多種多様な人が、多種多様な話題で盛り上がる。<br />
                            学校に行く前でも、暇な時も、寝るときも、いろんな状況で楽しめる。<br />
                            そんな雑談はいろんな方にお勧めです。
                        </p>
                        <div className="flex w-full justify-center items-center rounded-lg py-2 object-cover h-[200px] ">
                            <Image className="w-full h-full object-cover rounded overflow-hidden" src="/feautres_01.png" alt="おすすめ要素その1" width={500} height={300} />
                        </div>
                    </div>
                    <div className="flex flex-col max-w-full shadow-lg py-4 px-6 max-h-[500px] rounded-xl justify-center items-center xl:w-[400px] bg-white opacity-90">
                        <h1 className="text-2xl font-semibold text-center p-4"> 鯖専用のあれこれ </h1>
                        <p className="">
                            <Link href="https://dev.shizen.lol" className="text-cyan-500 font-semibold">鯖専属のデベロッパー集団</Link>が作成したBotが、
                            雑談にちょっとしたスパイスを与えます。<br />
                            メッセージランキングで誰かと競うもよし。<br />そんなサーバーです。
                        </p>
                        <div className="flex w-full justify-center items-center rounded-lg py-2 object-cover h-[200px]">
                            <Image className="w-full h-full object-cover rounded overflow-hidden" src="/feautres_02.png" alt="おすすめ要素その2" width={500} height={300} />
                        </div>
                    </div>
                    <div className="flex flex-col max-w-full shadow-lg py-4 px-6 max-h-[500px] rounded-xl xl:w-[400px] bg-white opacity-90">
                        <h1 className="text-2xl font-semibold text-center p-4"> どんな人でも。 </h1>
                        <p className="">
                            様々な理由を抱えたり、日本語がしゃべれない方でも、別に問題ありません。<br />
                            みんなが楽しめるような環境が、<br />そこにはあります。
                        </p>
                        <div className="flex w-full justify-center items-center rounded-lg py-2 object-cover h-[200px]">
                            <Image className="w-full h-full object-cover rounded overflow-hidden" src="/feautres_upd_03.png" alt="おすすめ要素その3" width={500} height={300} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col w-full min-h-screen sm:px-12 lg:px-24 items-center justify-center ${noto.className}`}>
                <div className="absolute left-0 min-h-screen w-full overflow-hidden -z-10">
                    <div className="absolute animate-fluid-shape rotate-6 bottom-0 left-0 w-[400px] h-[400px] -z-10 transform-gpu rounded-xl bg-green-500 opacity-30 sm:block hidden" />
                    <div className="absolute animate-fluid-shape-2 -rotate-12 top-[270px] left-[110px] w-[400px] h-[400px] -z-20 transform-gpu rounded-2xl bg-green-400 opacity-20  " />
                    <div className="absolute animate-fluid-shape-2 rotate-6 top-[200px] left-[400px] w-[300px] h-[300px] -z-30 transform-gpu rounded-2xl bg-green-200 opacity-40  sm:block hidden" />
                    <div className="absolute animate-fluid-shape rotate-6 top-0 right-0 w-[400px] h-[400px] -z-10 transform-gpu rounded-xl bg-cyan-500 opacity-30 sm:block hidden" />
                    <div className="absolute animate-fluid-shape-2 -rotate-12 top-[270px] right-[110px] w-[400px] h-[400px] -z-20 transform-gpu rounded-2xl bg-cyan-400 opacity-20  " />
                    <div className="absolute animate-fluid-shape rotate-6 top-[450px] right-[300px] w-[300px] h-[300px] -z-30 transform-gpu rounded-2xl bg-cyan-200 opacity-40  " />
                </div>
                <div className="flex flex-col gap-6 py-14 items-center shadow-xl px-6 bg-white opacity-[75]">
                    <h1 className='text-4xl font-bold text-center py-6 animate-slide-top'> Why don't you join our <span className="text-green-400">S</span>erver? </h1>
                    <p className='text-xl'>
                        まずは参加してみましょう。<br />
                        そのあとは自分で楽しみ方を見つけて、楽しむだけです。
                        待っていますよ。
                    </p>

                    <Link
                        href="https://discord.gg/49Q7JhCrAK"
                        className='bg-green-500 hover:bg-green-600 transform-gpu transition-colors text-white text-xl font-bold py-4 px-8 rounded-xl'
                    >
                        サーバーに参加する
                    </Link>
                </div>
            </div>
        </main>
    )
}