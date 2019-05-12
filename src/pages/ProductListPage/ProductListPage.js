import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from './../../actions'


class ProductListPage extends Component {
 
    componentDidMount(){
        this.props.fetchAllProducts()
    }

    onDelete = id => {
        this.props.ondeleteProduct(id)
    }

    render() {
        const { products } = this.props
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
                        onDelete={this.onDelete}
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
        fetchAllProducts: () => {
            dispatch(actions.actFetchProductsRequest())
        },
        ondeleteProduct: id => {
            dispatch(actions.actDelelteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
