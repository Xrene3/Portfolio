import './Card.css'

function Card({ title, className, children }) {
    return (
        <div className="card shadow-lg p-4 m-1.5 rounded bg-gray-600 backdrop-blur-md text-sm">
            {title && <h3 className="font-bold">{title}</h3>}
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}

export default Card;