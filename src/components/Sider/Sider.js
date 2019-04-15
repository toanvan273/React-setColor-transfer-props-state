import React from 'react'
import './Sider.css'

const Sider = props =>{
    let siderClass = 'slider'
    if(props.show){
        siderClass = ' slider open'
    }
    return (
        <nav className={siderClass}>
            <ul>
                <li> <a href="/">Product</a> </li>
                <li> <a href="/">Users</a> </li>
            </ul>
        </nav>
    )
} 

export default Sider