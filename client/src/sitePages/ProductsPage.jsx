/* ProductsPage is the Parent component */
import React from 'react';
import ProductHero from '../components/productsPage/ProductHero';
import ProductDataList from '../components/productsPage/ProductDataList';

const ProductsPage = () => {
    return (
        <>
        <ProductHero />
        <ProductDataList />
        </>
    )
}

export default ProductsPage;