import React, {Component} from 'react'

class SetFont extends Component {
    constructor(){
        super()
        this.state = {
            fontSize : 8, //[8,10,12,14,16,18,20]
        }
    }
    fnTru = () => {
        this.setState(
         {
             fontSize: this.state.fontSize - 2
         }
        )
    }
    fnCong = () => {
        this.setState({
            fontSize: this.state.fontSize + 2
        })
    }
    render(){
        return(
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Set Font</h3>
                    </div>
                    <div className="panel-body">
                        <p><strong> {this.state.fontSize } px </strong></p>
                        <button class="btn btn-default" type="submit" onClick={this.fnTru}>Trừ</button>
                        <button class="btn btn-default" type="submit" onClick={this.fnCong}>Cộng</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SetFont