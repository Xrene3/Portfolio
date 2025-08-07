import './Card.css'

function Card({ title, className, children }) {
    return (
        <div className=
            {`
        card 
        shadow-xl
        dark:shadow-indigo-300/20
        p-8 
        m-1.5 
        rounded 
        backdrop-blur-md 
        text-sm 
        border-0 
        bg-sky-50 
        inset-shadow-lg
        inset-shadow-indigo-400/20
        dark:bg-gray-800
        dark:text-indigo-100
        border-indigo-300/30
        ${className}`}
        >
            {title && <h3 className="font-bold xl:text-xl text-orange-500 dark:text-lime-200 mb-3">{title}</h3>}
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}

export default Card;