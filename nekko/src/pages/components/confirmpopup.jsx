import React from 'react'
import './com_style/confirmpopup.css';


function ConfirmPopup(props){
    const staticFilePath = "http://localhost:2999/picture";
    return (props.trigger) ? (

        <div class = "popup">

            <div class = "confirmpopup-container">


                <img src = {staticFilePath + "/alert-sign.png"}>

                </img>

                <section class = "warning">
                    Are you sure?
                </section>

                <section class = "warning">
                    You won't be able to revert this
                </section>

                <section class = "buttonsContainer">

                <button class = "confirm" onClick={(e) => {props.callOnConfirm(e);props.setTrigger(false)}}> {/*  call post or put function */}
                    Yes
                </button>

                <button class = "reject" onClick={() => props.setTrigger(false)}>
                    cancel
                </button>

                </section>


            </div>
            

        </div>

    ) : "";
}

export default ConfirmPopup;