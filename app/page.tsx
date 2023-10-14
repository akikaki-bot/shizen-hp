import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="grid grid-cols-12 min-h-screen flex-col items-center justify-between px-12 sm:px-24">
            <div className="absolute top-0 left-0 h-screen w-screen drop-shadow-xl backdrop-blur-3xl rounded-xl transform -rotate-1" style={{"backgroundImage" : `url(/shizen.jpg)`, filter : `blur(8px)`}}></div>
                <div className="col-span-12 grid grid-cols-12 min-h-screen flex-col items-center justify-between p-6">
                    <div className="col-span-3 scale-in-center animate-focus-in-expand-fwd">
                        <h1 className='text-4xl lg:text-6xl font-bold'> Shizengakari </h1>
                        <h1 className='text-2xl lg:text-4xl font-bold'> Server </h1>
                    </div>
                    <div className="col-start-9 col-span-3 hidden sm:grid">
                        <Image
                            className='animate-slide-top rounded-full'
                            src={"/sizengakari_icon.png"}
                            alt="サーバーのアイコン"
                            height={`450`}
                            width={`450`}
                        >
                        </Image>
                    </div>
            </div>
            <div className="col-start-1 sm:col-start-6 col-span-2">
                <br />
                <span className="hidden sm:grid text-4xl font-semibold">Feautures</span>
            </div>
            <div className="col-span-12 grid grid-cols-12 min-h-screen flex-col items-center sm:p-6">
                <div className="row-start-1 lg:row-start-1 lg:col-start-2 lg:col-span-4 col-span-9 scale-in-center animate-focus-in-expand-fwd py-7">
                    <h1 className='text-4xl font-bold'> 絶えない会話 </h1>
                    <p className='text-xl'> 
                        会話が絶えません。<br />
                        いろんな人が、いろんなことで楽しめます。
                    </p>
                </div>
                <div className="row-start-2 sm:col-span-10 lg:row-start-1 lg:col-start-8 lg:col-span-6 col-span-12 col-start-1 sm:grid animate-slide-top">
                    <Image
                        className='transform rotate-6'
                        src={"/feautres_01.png"}
                        alt="会話の様子"
                        height={`500`}
                        width={`1000`}
                    >
                    </Image>
                </div>
                <div className="row-start-3 lg:row-start-2 lg:col-start-2 lg:col-span-4 col-span-9 scale-in-center animate-focus-in-expand-fwd py-7">
                    <h1 className='text-4xl font-bold'> サーバーだけのBot </h1>
                    <p className='text-xl '> 
                        このサーバーだけに提供されているBotが、<br />
                        サーバーをさらに面白くしてくれます。
                    </p>
                </div>
                <div className="row-start-4 sm:col-span-8 lg:row-start-2 lg:col-start-8 lg:col-span-6 col-span-10 col-start-1 sm:grid animate-slide-top-2">
                    <div> ↓ここらへんにメッセージランキング </div>
                    <Image
                        className='transform -rotate-6'
                        src={"/feautres_02.png"}
                        alt="例その１"
                        height={`300`}
                        width={`500`}
                    >
                    </Image>
                </div>
                <div className="flex flex-col items-center row-start-5 col-span-12 scale-in-center animate-focus-in-expand-fwd py-10">
                    <div className="py-14 items-center">
                        <h1 className='text-4xl font-bold'> サーバーに参加する準備はできましたか？ </h1>
                        <p className='text-xl font-semibold'> 
                            今すぐ参加しよう。そうしよう。
                        </p>
                    </div>
                    <Link
                      href="https://discord.gg/49Q7JhCrAK"
                      className='bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-4 px-8 rounded'
                    >
                        サーバーに参加する
                    </Link>
                </div>
            </div>
        </main>
    )
}
