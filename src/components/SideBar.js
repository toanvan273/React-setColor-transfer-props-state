import React, { Component } from 'react';
class SideBar extends Component {
    state = {
        user1 : {
            name: 'Nam',
            chat: []
        },
        user2 : {
            name: 'Nhung',
            chat: []
        }
    }
    onClick = () => {
        this.props.getInfo(this.state.user1)
    }
    render() {

        return (
            <>
                 <ul className="list-group">
                    <li className="list-group-item" onClick={this.onClick}>Item 1</li>
                    <li className="list-group-item">Item 2</li>
                </ul>
            </>

        );
    }
}

export default SideBar;
