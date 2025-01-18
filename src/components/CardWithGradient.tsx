type CardWithGradientProps = {
    title: string;
    description: string;
    className?: string;
}


export default function CardWithGradient({title, description, className}: CardWithGradientProps) {
    return (
        <div className={`w-full max-w-[400px] mx-auto bg-gradient-to-tr from-secondary-950 to-secondary-800 rounded-2xl border border-transparent animate-border  ${className}`}>
            <div className="relative text-center z-10 px-0 py-16 rounded-2xl w-fit h-full mx-auto">
                <>
                    <h1 className='text-xl font-semibold tracking-tight text-white'>
                        {title}
                    </h1>
                    <p className='text-base pt-2  text-text-100 capitalize'>
                        {description}
                    </p>
                </>
            </div>
        </div>
    )
}
