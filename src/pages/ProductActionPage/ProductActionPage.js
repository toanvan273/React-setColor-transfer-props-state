import React, { Component } from 'react';
import callApi from './../../utils/apiCaller'
import { Link } from 'react-router-dom'
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
            callApi(`products/${id}`, 'GET', null).then(res => {
                let data = res.data
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    checkStatus: data.status
                })
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
        const { id, txtPrice, txtName, checkStatus } = this.state
        if (id) { // update
            callApi(`products/${id}`,'PUT', {
                name: txtName,
                price: txtPrice,
                status: checkStatus
            }).then(res => {
                history.goBack()
            })
        } else { // add
            callApi('products', 'POST', {
                name: txtName,
                price: txtPrice,
                status: checkStatus
            }).then(res => {
                history.push('/product-list')
            })
        }

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

export default ProductActionPage;
