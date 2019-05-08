import React, { Component } from 'react';
import callApi from './../../utils/apiCaller'
class ProductActionPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            txtName: '',
            txtPrice: '',
            checkStatus: '',
            id: ''
        }
    }

    onChange = e => {
        let target = e.target
        let name = target.name
        let value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name] : value
        })
    }

    onSave = e => {
        e.preventDefault()
        // console.log(this.state)
        const {txtPrice, txtName, checkStatus} = this.state
        callApi('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: checkStatus
        }).then(res => {
            console.log('res',res)
        })
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
                                    />
                                    Còn hàng
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                        </form>
                        
                    </div>
                </div>
            </>

        );
    }
}

export default ProductActionPage;
