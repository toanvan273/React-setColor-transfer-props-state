import React, { Component } from 'react';
import callImageApi from './../../utils/apiImage'

class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        callImageApi('photos', 'GET', null).then(res => {
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        const { data } = this.state
        return (
            <>
                {data.map((image, index) => {
                    return (
                        <div key={index}>
                            <img
                               
                                src={image.url}
                                alt={image.title}
                            />
                            <p> {image.title} </p>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default Image;
