import type { Guitar } from '../types/index.ts';


type GuitarProps = {
    guitar : Guitar, 
    addToCart: (item: Guitar) => void
}


export default function Guitar({ guitar, addToCart } : GuitarProps) {

    // Extraemos los datos del JSON (desestructuración)
    const { name, image, description, price } = guitar; 

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                {/* Usamos 'image' para la ruta de la foto */}
                <img 
                    className="img-fluid" 
                    src={`/img/${image}.jpg`} 
                    alt={`imagen guitarra ${name}`} 
                />
            </div>
            <div className="col-8">
                {/* Usamos 'name' para el título */}
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                {/* Usamos 'description' para el texto */}
                <p>{description}</p>
                {/* Usamos 'price' para el número */}
                <p className="fw-black text-primary fs-3">${price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                    >Agregar al Carrito</button>
            </div>
        </div>
    );
}