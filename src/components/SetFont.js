import React, {Component} from 'react'

class SetFont extends Component {
    render(){
        return(
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size: 20 px</h3>
                    </div>
                    <div className="panel-body">
                        <button className="btn btn-default" type="submit">Trừ</button>
                        <button className="btn btn-default" type="submit" >Cộng</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SetFont