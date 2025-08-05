import './Card.css'

function Card({ title, className, children }) {
    return (
        <div className="
        card 
        shadow-xl
        dark:shadow-indigo-300/20
        p-8 
        m-1.5 
        rounded 
        backdrop-blur-md 
        text-sm 
        border-2 
        bg-sky-50 
        dark:bg-gray-800
        dark:text-indigo-100
        border-indigo-300/30
        ">
            {title && <h3 className="font-bold xl:text-xl text-orange-500 dark:text-lime-200 mb-3">{title}</h3>}
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}

export default Card;