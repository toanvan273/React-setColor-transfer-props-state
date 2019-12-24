import React from 'react';
import styled from 'styled-components'

const Bound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    margin-bottom:8px;
    color: #005993;
    @media only screen and (max-width: 600px) {
      font-size: 18px;
      margin-bottom:5px;
    }
    .div{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            background: pink;
            padding: 10px;
            border-radius: 5px;
            text-transform: uppercase;
            font-size: 36px;
        }
    }
`

export default class CoundownNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.time,
            running: false,
        }

    }
    componentDidMount() {
        this.handleStart();
    }

    handleStart() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({ count: newCount >= 0 ? newCount : 0 },
                () => {
                    //   this.props.getTime(this.state.count)
                    if (this.state.count === 0) {
                        clearInterval(this.timer);
                    }
                });
        }, 1000);

    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    functionX(sec_num) {
        // var sec_num = parseInt(this, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        return 'Chỉ còn ' + hours + ' giờ ' + minutes + ' phút ' + seconds + ' giây';
    }

    render() {
        const { count } = this.state
        // console.log(count);

        return (
            <Bound >
                <div className="div">
                    <b>Hãy nhanh tay sở hữu USB này nhé !</b>
                    <p> {this.functionX(count)}</p>
                </div>

            </Bound>
        )
    }
}