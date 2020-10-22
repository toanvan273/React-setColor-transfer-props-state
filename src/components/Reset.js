import React, {Component} from 'react'
import {withTranslate} from 'react-redux-multilingual'

class Reset extends Component {
    getReset = () => {
        this.props.toReset(true)
    }
    render(){
      const {translate} = this.props

        return(
            <div className="col-md-6">
                <button className="btn btn-success" type="submit" onClick={this.getReset} >{translate('button.reset')}</button>
            </div>
        )
    }
}

export default withTranslate(Reset)