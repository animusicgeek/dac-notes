import { Link } from 'react-router-dom';

function Card({ id, image, title, type }) {
    return (
        <>
            <Link to={`/details/${id}`}>
                <div className="card bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer
            hover:scale-105 duration-300">
                    <img src={image} alt={title} className="card-image w-full h-80 object-cover" />
                    <div className="p-4">
                        <h3 className="text-white text-xl font-semibold mb-2">
                            {title.length > 25 ? `${title.slice(0, 25)}...` : title}
                        </h3>
                        <p className="text-gray-400">{type}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
export default Card;
