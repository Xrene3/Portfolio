function Card({ title, className, children }) {
    return (
        <div className="card shadow-lg p-3 m-1.5 rounded bg-gray-600">
            {title && <h3 className="font-bold">{title}</h3>}
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}

export default Card;