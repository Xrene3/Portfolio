import './Card.css'

function Card({ title, className, children }) {
    return (
        <div className=
            {`
                card 
                p-8 
                m-1.5 
                rounded 
                backdrop-blur-md 
                text-sm 
                bg-sky-50 

                drop-shadow-md/30
                
                border-t-1
                border-t-zinc-400/40

                border-b-1
                border-b-zinc-800/40

                dark:bg-gray-800
                dark:text-indigo-100
                border-indigo-300/30
                overflow-hidden
                ${className}`}>
            {title && <h3 className="font-bold xl:text-xl text-orange-500 dark:text-lime-200 mb-3 w-full">{title}</h3>}
            {children}
        </div>
    )
}

export default Card;