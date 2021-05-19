import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

ProductList.propTypes = {
    productList: PropTypes.array.isRequired,
};

function ProductList(props) {
    const { productList } = props;
    return (
        <ul className="product-list">
            {productList.map((product) => (
                <li key={product.id}>
                    <img
                        src={`${product.thumbnailUrl}?random=${Date.now()}`}
                        loading="lazy"
                        decoding="async"
                        height="350.59"
                        width="350.59"
                    ></img>
                    <p>{product.name}</p>
                </li>
            ))}
        </ul>
    );
}

export default ProductList;
