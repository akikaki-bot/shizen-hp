

/**
 * className = sm:block hidden
 */
export function ItemContainer({ className, children, img }: { className?: string, children?: React.ReactNode, img?: string }) {
    return (
        <div 
        className={`rounded-lg h-32 w-32 transform rotate-[45deg] shadow-xl bg-opacity-30 ${className}`}
        style={{ backgroundImage: `url('${img}')`, backgroundSize: "cover" }}
        />
    )
}