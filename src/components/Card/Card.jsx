import './Card.css'

function Card({ title, className, children }) {
    return (
        <div className="card 
        shadow-lg 
        p-8 
        m-2.5 
        rounded 
        backdrop-blur-md 
        text-sm 
        border-2 
        bg-sky-100 
        dark:bg-sky-800
        border-gray-200/50">
            {title && <h3 className="font-bold">{title}</h3>}
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}

export default Card;