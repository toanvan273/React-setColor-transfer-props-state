import React, {Component} from 'react'

class Result extends Component {
    // constructor(props){
    //     super(props)

    // }
    setStyle(){
        return {
            color: this.props.color,
            borderColor: this.props.color
        }
    }
    render(){
        return(
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Result</h3>
                    </div>
                    <div className="panel-body">
                        <div id="test" style={this.setStyle()}>
                            NỘI DUNG ĐOẠN TEXT
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result