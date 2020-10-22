import React, {Component} from 'react'
import {withTranslate} from 'react-redux-multilingual'
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
        const {translate} = this.props
        return(
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size: {this.props.fontSize} px</h3>
                    </div>
                    <div className="panel-body">
                        <button className="btn btn-default" type="submit" onClick={()=> this.changeSize(-2)}>{translate('sign.minus')}</button>
                        <button className="btn btn-default" type="submit" onClick={() => this.changeSize(2)}>{translate('sign.plus')}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslate(SetFont)