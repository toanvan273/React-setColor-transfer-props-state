import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            txtUsername: '',
            txtPassword: '',
            txtDesc: '',
            sltGender: 0, //
            rdLang: 'en',
            checkStatus: true
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }
    onHandleChange(event){
        // this.setState({
        //     Username: event.target.value
        // })
        var target = event.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    onHandleSubmit(event){
        event.preventDefault() //chặn submit
        console.log(event.target)
    }
    render(){
       
        return(
            <>
                
                <form onSubmit={this.onHandleSubmit}>
                    <legend>Form title</legend>
                
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" className="form-control" value={this.state.txtUsername}  name='txtUsername' onChange={ this.onHandleChange }/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" value={this.state.txtPassword}   name='txtPassword' onChange={ this.onHandleChange }/>
                    </div>
                    <div className="form-group">
                        <label>Mô tả: </label>
                        <textarea name="txtDesc" value={this.state.txtDesc}  className="form-control" rows="3" onChange={ this.onHandleChange }></textarea>
                    </div>
                    <label>Giới tính: </label>
                    <select name="sltGender"  className="form-control" onChange={ this.onHandleChange }>
                        <option value={0} >Nữ</option>
                        <option value={1} >Nam</option>
                    </select>
                    <label>Ngôn ngữ: </label>
                    <div className="radio">
                        <label>
                            <input type="radio" checked={this.state.rdLang === 'en'} name="rdLang" value="en" onChange={ this.onHandleChange }/>
                            Tiếng Anh
                        </label> <br/>
                        <label>
                            <input type="radio" checked={this.state.rdLang === 'vi'} name="rdLang" value="vi" onChange={ this.onHandleChange }/>
                           Tiếng Việt
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" checked={this.state.checkStatus === true} value={true} name="checkStatus" onChange={ this.onHandleChange }/>
                            Checkbox
                        </label>
                    </div>
                    
                    <br/>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                    <button type="reset" className="btn btn-success">Xóa trắng</button>
                </form>
                

            </>
        )
    }
}

export default Form 