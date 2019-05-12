import React, { Component } from 'react';
// import callApi from './../../utils/apiCaller'
import { Link } from 'react-router-dom'
import * as actions from './../../actions/index'
import { connect } from 'react-redux'


class ProductActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtName: '',
            txtPrice: '',
            checkStatus: '',
            id: ''
        }
    }

    componentDidMount() {
        const { match } = this.props
        if (match) {
            let id = match.params.id
            this.props.onEditProduct(id)
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            let { itemEditing } = nextProps
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                checkStatus: itemEditing.status,
            })
        }
    }

    onChange = e => {
        let target = e.target
        let name = target.name
        let value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }

    onSave = e => {
        e.preventDefault()
        const { history } = this.props
        const { id, txtName, txtPrice, checkStatus } = this.state
        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: checkStatus
        }
        if (id) { // update
            this.props.onUpdateProduct(product)
        } else { // add
            this.props.addProduct(product)
        }
        history.goBack()
    }
    render() {
        const { txtName, txtPrice, checkStatus } = this.state
        return (
            <>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <form onSubmit={this.onSave}>
                            <div className="form-group">
                                <label>Tên Sản Phẩm</label>
                                <input type="text" className="form-control"
                                    value={txtName}
                                    onChange={this.onChange}
                                    name="txtName" />
                            </div>
                            <div className="form-group">
                                <label>Giá :</label>
                                <input type="number" className="form-control"
                                    value={txtPrice}
                                    onChange={this.onChange}
                                    name="txtPrice" />
                            </div>
                            <div className="form-group">
                                <label>Trạng thái: </label>
                            </div>
                            <div className="checkbox"  >
                                <label>
                                    <input type="checkbox" name="checkStatus"
                                        value={checkStatus}
                                        onChange={this.onChange}
                                        checked={checkStatus}
                                    />
                                    Còn hàng
                                </label>
                            </div>
                            <Link to="/product-list" className="btn btn-danger mr-10">Trở lại</Link>
                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                        </form>

                    </div>
                </div>
            </>

        );
    }
}
const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => {
            dispatch(actions.actAddProductRequest(product))
        },
        onEditProduct: id => {
            dispatch(actions.actGetProductRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(actions.actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)
