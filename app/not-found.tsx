



export default function NotFound() {
    return (
        <main className="grid grid-cols-12 min-h-screen flex-col items-center justify-between px-6 sm:px-24">
            <div className="col-span-12 grid grid-cols-12 min-h-screen flex-col items-center justify-between p-6">
                <div className="col-span-8 sm:col-span-7 scale-in-center animate-focus-in-expand-fwd">
                    <h1 className="text-4xl">NotFound...</h1>
                    <h1 className="text-2xl">ページが見つかりません</h1>
                </div>
                <div className="row-start-2 col-span-12 sm:col-span-8 scale-in-center">
                    <div className="border-l-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        <div className="flex">
                            <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                            <div>
                            <p className="text-xl font-bold">上の<code>Shizengakari Server</code>を押してみてください。</p>
                            <p className="text-sm">戻れると思いますよ★</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}