import React from 'react'

import ToggleButton from '../Sider/ToggleButton'
import './Toolbar.css'
const MainMenu = props => (
    <header className="toolbar">
        <nav className="toolbar-navi">
            <div className="navi-button">
                <ToggleButton click={props.toggleClick}/>
            </div>
            <div className="logo"> <a href="/">THE LOGO</a> </div>
            <div className="spacer"></div>
            <div className="navi-items">
                <ul>
                    <li> <a href="/">Products</a> </li>
                    <li> <a href="/">User</a> </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default MainMenu