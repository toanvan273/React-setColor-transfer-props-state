import React, {Component} from 'react'
import {withTranslate} from 'react-redux-multilingual'
class Result extends Component {
    // constructor(props){
    //     super(props)

    // }
    setStyle(){
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        }
    }
    render(){
        const {translate} = this.props
        return(
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color: <strong style={{color: this.props.color}}> {this.props.color} </strong> - Font-size: {this.props.fontSize} px</h3>
                    </div>
                    <div className="panel-body">
                        <div id="test" style={this.setStyle()}>
                            {translate('nddt')}
                        </div>
                        <h1>{translate('inbox.text')}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslate(Result)