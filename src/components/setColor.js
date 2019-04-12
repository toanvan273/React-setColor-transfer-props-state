import React, {Component} from 'react'

class SetColor extends Component {
    constructor(props){
        super(props)

        this.state = {
            colors: ['red','green','blue','pink','yellow','orange','gray','black']
        }
    }
    ShowColor(pay){
        return {
            backgroundColor: pay
        }
    }
    setActive(color){
        this.props.getColor(color)
    }
    render(){
        return(
        <div className="col-md-6">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Set Color</h3>
                </div>
                <div className="panel-body">
                   {this.state.colors.map(e => { 
                       return  <span key={e} style={this.ShowColor(e)} className={this.props.color === e ? 'active' : ''}
                       onClick={ () => this.setActive(e)}
                       ></span>
                   })}
                </div>
            </div>
        </div>
        )
    }
}

export default SetColor