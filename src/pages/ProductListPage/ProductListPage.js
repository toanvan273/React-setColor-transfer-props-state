import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom'
class ProductListPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            products : []
        }
    }
    componentDidMount(){
       callApi("products", 'GET', null).then(res => {
           this.setState({
               products: res.data
           })
       })

    }
    render() {
        // const { products } = this.props
        const { products } = this.state
        return (
            <>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/product/add" className="btn btn-info mb-10">Thêm sản phẩm</Link>
                        <ProductList>
                            {this.showProducts(products)}
                        </ProductList>
                    </div>
                </div>
            </>

        );
    }

    showProducts(products) {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                )
            })
        }
        return result
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
