import React from 'react';
import TimeUpdate from "../TimeUpdate/TimeUpdate";
import "./Sakura.css"

function Sakura() {
    const finalTime =1580520600000;
    return (
        <div style={styles.root}>
            <div style={styles.root.background}>
                <div style={styles.root.background.time}>
                <TimeUpdate  finalTime ={finalTime}/>
                </div>
            </div>
            <div className={"sakura"} style={styles.root.sakura}>
            </div>
        </div>
    )
}
export default Sakura;

const styles ={
    root:{
        width:"100%",
        height:"100%",
        position:"absolute",
        top:0,
        left:0,

        sakura:{
            width:"100%",
            height:"100%",
            backgroundImage: "url("+require("../assets/image/saku.gif")+")",
            zIndex:11,
            position:"absolute",
            top:0,
            left:0,
            filter:"10px",
        },

        background:{
            width:"100%",
            height:"100%",
            backgroundImage:"url("+require("../assets/image/background.jpeg")+")",

            time:{
                position:"absolute",
                top:"35vh",
                left:"5vw"
            }
        }
    },

};
