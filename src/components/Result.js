import React, {Component} from 'react'

class Result extends Component {

    render(){
        return(
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color: <strong> red </strong> - Font-size: 12 px</h3>
                    </div>
                    <div className="panel-body">
                        <div id="test">
                            NỘI DUNG ĐOẠN TEXT
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result