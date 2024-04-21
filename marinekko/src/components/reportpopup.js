import React from 'react'
import './com_style/reportpopup.css';


function ReportPopup(props){
    return (props.trigger) ? (

        <div class = "popup">

            <div class = {(props.errorCondition?"reportpopup-container reportFailure":"reportpopup-container reportSuccess")}>

                <section class = "report">
                    {(props.mode==="EDIT"?"Saved":(props.mode==="ADD"?"Added":"Deleted")) + " " + (props.errorCondition?"Failure ":"Successfully ")}
                </section>

                <button class = "closeButton" onClick={() => {if(props.setTriggerReload != null) props.setTriggerReload(prev => !prev);props.setTrigger(false)}}>
                    close
                </button>
  
            </div>
            
        </div>

    ) : "";
}

export default ReportPopup;