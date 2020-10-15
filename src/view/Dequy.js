import React from 'react';
import MyDequy from './Dequy'
class Dequy extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            dataGet: props.data
        }
    }
 
    onChoseItem = (item) => {
        let { dataGet } = this.state
        console.log("dataGet: ", dataGet);
        let newData = dataGet
        newData.map((v, i) => {
            if (v.label === item.label) {
                newData.splice(i, 1)
            }
        })
        console.log('2=', dataGet)
        console.log('newData', newData)
        this.setState({ dataGet:newData })
    }
    render() {
        let { dataGet } = this.state
        console.log('render: ', dataGet)
        return (
            <React.Fragment >
                {dataGet.length > 0 &&
                    dataGet.map((item, index) => {
                        return (
                            <div  key={index} >
                                <h3 style={{paddingLeft:this.props.depth*25}} onClick={() => this.onChoseItem(item, index)}>{item.label}</h3>
                                {item.data && item.data.length > 0 && <MyDequy depth={this.props.depth+1} data={item.data} />}
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}
export default Dequy