import React from 'react';
import TimeUpdate from "../TimeUpdate/TimeUpdate";

function Sakura() {
    const finalTime =1580520600000;
    return (
        <div className={"background"}>
            <div className={"Time"}>
                <TimeUpdate  finalTime ={finalTime}/>
            </div>
        </div>
    )
}
export default Sakura;
