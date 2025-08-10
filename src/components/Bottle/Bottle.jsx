import BottleImage from '../../assets/images/bottle.webp'

export default function Bottle(rotationDeg, children, page, setPage) {
    return (
        <img src={BottleImage} alt="Bottle" className="w-50 absolute bottle" />
    )
}