import React from 'react'
import './ToggleButton.css'

const ToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="button-line"></div>
        <div className="button-line"></div>
        <div className="button-line"></div>
    </button>
)
export default ToggleButton