import './Card.css'

function Card({ title, className, children }) {
    return (
        <div className="card 
        shadow-xl
        dark:shadow-blue-300/20
        p-8 
        m-1.5 
        rounded 
        backdrop-blur-md 
        text-sm 
        border-2 
        bg-sky-50 
        dark:bg-sky-900
        dark:text-sky-100
        border-zinc-300/50">
            {title && <h3 className="font-bold">{title}</h3>}
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}

export default Card;