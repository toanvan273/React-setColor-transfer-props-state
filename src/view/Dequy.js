import React from 'react';
class Dequy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
 
    onChoseItem = (item) => {
        let { data } = this.state
        let newData = data
        newData.map((v, i) => {
            if (v.label === item.label) {
                newData.splice(i, 1)
            }
            return newData
        })
        this.setState({ data:newData })
    }
    shouldComponentUpdate(nextProps,nextState){
        return true
    }
    
    render() {
        let { data } = this.state
        // console.log('render: ', data)
        return (
            <React.Fragment >
                {data.length > 0 &&
                    data.map((item, index) => {
                        return (
                            <div  key={index} >
                                <h3 style={{paddingLeft:this.props.depth*25}} onClick={() => this.onChoseItem(item, index)}>{item.label}</h3>
                                {item.data && item.data.length > 0 && <Dequy depth={this.props.depth+1} data={item.data} />}
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}
export default Dequy