import BottleImage from '../../assets/images/bottle.webp'
import './Bottle.css'
export default function Bottle({ rotation, children, page, setPage, className }) {
    const rotate = 'rotate-' + rotation;
    return (
        <img src={BottleImage} alt="Bottle" className={`drop-shadow-lg drop-shadow-transparent hover:drop-shadow-yellow-100 w-50 absolute bottle ${className}`} />
    )
}