import React from 'react'
import './Sider.css'

const Sider = props =>{
    let siderClass = 'slider'
    let btnClass = 'btn btn-default'
    if(props.show){
        siderClass = 'slider open'
    }else{
        btnClass = 'btn btn-default close'
    }
   
    return (
        <nav className={siderClass}>
            <div className='button'>
                <button type="button" className={btnClass} onClick={props.toggleClick}>X</button>
            </div>        
            
            <ul>
                <li> <a href="/">Product</a> </li>
                <li> <a href="/">Users</a> </li>
            </ul>
        </nav>
    )
} 

export default Sider