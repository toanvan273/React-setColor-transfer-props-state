import React, {Component} from 'react'

class Reset extends Component {
    getReset = () => {
        this.props.toReset(true)
    }
    render(){
        return(
            <div className="col-md-6">
                <button className="btn btn-success" type="submit" onClick={this.getReset} >Reset</button>
            </div>
        )
    }
}

export default Reset