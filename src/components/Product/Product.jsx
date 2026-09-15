import "./styles.css"

function Product({ name, price }) {
    return (
        <div className="product">
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price.toFixed(2)}</p>
        </div>
    );
}

export default Product
