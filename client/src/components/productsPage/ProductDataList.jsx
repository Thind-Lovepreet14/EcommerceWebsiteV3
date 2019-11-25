import React from 'react';
import Product from './Product';



class ProductDataList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            productsList: []
        };
        this.none = this.none.bind(this)
        this.genderWomen = this.genderWomen.bind(this)
        this.genderMen = this.genderMen.bind(this)
        this.priceLowToHigh = this.priceLowToHigh.bind(this)
        this.priceHighToLow = this.priceHighToLow.bind(this)
        this.getProducts = this.getProducts.bind(this)
    }

    getProducts() {
        fetch('/product') 
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        productsList: data
                    });
                })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            });
    
    }

    // getProductFilter() {
    //     let url = '/api/productFilter'
    //     let urlParams = []
    //     if (this.state.type) {
    //         url += '?type='+this.state.type
    //     }
    //     if(this.state.priceMin) {
    //         url += '?priceMin='+this.state.priceMin
    //     }
    //     else if(this.state.priceMax) {
    //         url += '?priceMax='+this.state.priceMax
    //     }
    //     fetch(url) 
    //         .then((res) => res.json())
    //         .then(
    //             (data) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     productsList: data
    //                 });
    //                 console.log(url)
    //             })
    //         .catch(error => {
    //             this.setState({
    //                 isLoaded: true,
    //                 error
    //             })
    //         });
    // }

    none() {
        this.getProducts()
    }

    genderWomen() {
        fetch('/api/productFilter?type=womans') 
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        productsList: data
                    });
                })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            });
    }

    genderMen() {
        fetch('/api/productFilter?type=mens') 
        .then((res) => res.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    productsList: data
                });
            })
        .catch(error => {
            this.setState({
                isLoaded: true,
                error
            })
        });
    }

    priceLowToHigh() {
        fetch('/api/productFilter?priceMin=1') 
        .then((res) => res.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    productsList: data
                });
            })
        .catch(error => {
            this.setState({
                isLoaded: true,
                error
            })
        });
    }

    priceHighToLow() {
        fetch('/api/productFilter?priceMax=1000') 
        .then((res) => res.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    productsList: data
                });
            })
        .catch(error => {
            this.setState({
                isLoaded: true,
                error
            })
        });
    }
     

    componentDidMount() {
        this.getProducts()
    }

    render() {
        const { error, isLoaded, productsList } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        }
         else {
            return (
                <Product 
                productsList={this.state.productsList} 
                getProducts={this.getProducts}
                none={this.none}
                genderWomen={this.genderWomen} 
                genderMen={this.genderMen} 
                priceLowToHigh={this.priceLowToHigh}
                priceHighToLow={this.priceHighToLow}
               
                />
            );
        }
    }
}

export default ProductDataList;