import React from 'react'
import './com_style/popup.css';

function Popup(props){
    return (props.trigger) ? (

        <div class = "popup">
            <div class = "popup-inner">

                <button class = "closeButton">
                    close
                </button>

            </div>
        </div>

    ) : "";
}

export default Popup;