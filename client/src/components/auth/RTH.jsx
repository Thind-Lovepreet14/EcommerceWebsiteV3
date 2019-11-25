import React from 'react';
import AdminHero from '../auth/AdminHero';
import ProductDataList from '../productsPage/ProductDataList';

const Admin = (props) => {
	return (
		<>
			<AdminHero />
			<ProductDataList />
		</>
	)
}

export default Admin;