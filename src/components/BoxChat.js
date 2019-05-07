import React, { Component } from 'react';


class BoxChat extends Component {
    constructor(props){
        super(props)
        this.state = {
            messeger: '',
            user: {
                name: '',
                data: [],
            }
            
        }
    }
    
    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         user: {
    //             name: nextProps.data.name,
    //             data: nextProps.data.data
    //         }
    //     })
    // }
    onChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState({
            [name] : value
        })
    }
    onSubmit = e => {
        e.preventDefault()
    }
    onClick = () => {
        const { messeger , user} = this.state
        let row = user.data
        row.push(
            <div key={messeger}> {messeger} </div>
        )
        this.setState({
            user : {
                data: row
            }
        })
        this.props.getData(user)
    }
    render() {
        const {  messeger, user, data } = this.state
        console.log('data',data)
        return (
            <>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title"> {user.name} </h3>
                    </div>
                    <div className="panel-body">
                        {user.data}
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" 
                        value={messeger}
                        onChange={this.onChange}
                        className="form-control" name="messeger" />
                        <button type="submit" className="btn btn-primary" onClick={this.onClick}>Submit</button>
                    </div>
                </form>
            </>

        );
    }
}

export default BoxChat;
