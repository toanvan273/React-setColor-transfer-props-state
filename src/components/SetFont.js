import React, {Component} from 'react'

class SetFont extends Component {
    constructor(){
        super()
        this.state = {
            fontSize : 8, //[8,10,12,14,16,18,20]
        }
    }
    changeSize(value){
        this.props.getFont(value)
    }
    render(){
        return(
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size: {this.props.fontSize} px</h3>
                    </div>
                    <div className="panel-body">
                        <button className="btn btn-default" type="submit" onClick={()=> this.changeSize(-2)}>Trừ</button>
                        <button className="btn btn-default" type="submit" onClick={() => this.changeSize(2)}>Cộng</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SetFont