import React from 'react';

const Product = (props) => {
    const { productsList } = props //this.productsList.props
    
    return (
        <>
        <div className="container-fluid btn-container">
            <button className="productbtn btn-active" onClick={() => props.none()}>Reset</button>
            <button className="productbtn btn-active" onClick={()=> props.genderWomen()}>Women</button>
            <button className="productbtn btn-active" onClick={() => props.genderMen()}>Men</button>
            <button className="productbtn btn-active" onClick={() => props.priceLowToHigh()}>Low to High</button>
            <button className="productbtn btn-active" onClick={()=> props.priceHighToLow()}>High to Low</button>
        </div>
        <div className="container-fluid products-container"> 
     
            <div className="row">
                {productsList.map((product, index) => (
                    <div key={index} className="col-md-4 product-column">
                        
                        <img className="img-fluid" src={product.image} alt={product.product_name} />
                        <p className="text-left">
                            <span className="product-title">{product.product_name}</span> 
                            <span className="product-price">${product.price}</span>
                            <span className="d-block item-description">{product.product_category}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Product;