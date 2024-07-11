import { ItemContainer } from "./itemContainer";


export function UserIcons() {

    return (
        <div className="absolute top-0 right-0 min-h-screen h-screen -z-10" >
            <div className="flex gap-[52px] justify-end px-24 ">
                {/* タブレットは推奨 4 つ*/}
                <ItemContainer img="/feautres_03.png" className="lg:block hidden" />
                <ItemContainer img="/feautres_01.png" className="sm:block hidden" />
                <ItemContainer img="/feautres_02.png" className="sm:block" />
                <ItemContainer img="/icons/sizengakari_icon.png" />
            </div>
            <div className="flex gap-[52px] justify-end px-3">
                <ItemContainer img="/icons/yuranu.png" className="lg:block hidden" />
                <ItemContainer img="https://images-ext-1.discordapp.net/external/BzvTmrb5xucTHsr_2MxQHjvz5X3OqgztfkdVxXJhozM/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/536489930080256011/a_289949cfdb1cf439c49f23de09f13012.gif" className="sm:block hidden" />
                <ItemContainer img="https://cdn.discordapp.com/avatars/705264675138568192/7582f09f62a62ededb67c44ca2564c57.png?size=1024" />
                <ItemContainer img="/icons/ameumasan_kani2.jpg" />
            </div>
            <div className="flex gap-[52px] justify-end px-24">
                <ItemContainer img="https://images-ext-1.discordapp.net/external/r-VRqGLWC7-ETg7BDVu0X3tyqX-mA7sKYJVqqVKD8ZM/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/511418443376099330/a4e5c66e12ce1cd5047288165117b38b.png?format=webp&quality=lossless" className="lg:block hidden" />
                <ItemContainer img="https://cdn.discordapp.com/avatars/666180024906547201/198c8f1fd0066e831e78f1ac8c59e690.png?size=1024" className="sm:block hidden" />
                <ItemContainer img="https://cdn.discordapp.com/avatars/1175810120647716994/63761358fbc4b0becb2340d09569cba8.png?size=1024/" />
            </div>
            <div className="flex gap-[52px] justify-end px-3">
                <ItemContainer img="/icons/aic.png" className="lg:block hidden bg-green-200" />
                <ItemContainer img="/icons/aic_whiteblack.png" className="sm:block hidden bg-green-200" />
                <ItemContainer img="/icons/hanwia.jpg" className="bg-green-200" />
            </div>
            <div className="flex gap-[52px] justify-end px-24">
                <ItemContainer img="/icons/nikoicon.png" className="lg:block hidden bg-green-200" />
                <ItemContainer img="/icons/nikoicon2.png" className="sm:[background-image: none] bg-green-200" />
            </div>
            <div className="flex gap-[52px] justify-end px-3">
                <ItemContainer img="/icons/nikoicon3.png" className="lg:block hidden bg-green-200" />
                <ItemContainer img="/icons/nikoicon4.png" className="sm:block hidden bg-green-200" />
                <ItemContainer img="/icons/nikoicon5.png" className="bg-green-200" />
            </div>
            <div className="flex gap-[52px] justify-end px-24">
                <ItemContainer img="/bkgrnd.png" className="lg:block hidden bg-green-200" />
                <ItemContainer img="shizen.jpg" className="sm:block hidden bg-green-200" />
                <ItemContainer img="yuranu.png" className="bg-green-200" />
            </div>
        </div>
        )
}