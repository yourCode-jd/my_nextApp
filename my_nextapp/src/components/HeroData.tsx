
export default function HeroData({ title, desc }) {
    return (
        <>
            <div className="min-h-[500px] heroBg bg-no-repeat bg-top flex items-center justify-center bg-cover flex-col gap-4">
                <h1 className='text-white text-center text-2xl md:text-5xl uppercase font-bold'>{title}</h1>
                <p className="text-white capitalize text-lg">{desc}</p>
            </div>
        </>
    )
}
