import React from 'react';
import {formatDuration} from "../Utils/TimeUtils";
import './TimeUpdate.css'

const styles={
    text: {
        color: "#ecb1c9",
        fontSize:"10vw",
        fontFamily:"XiangSu",
    }
};


class TimeUpdate extends React.Component {
    constructor(props) {
        super(props);
        const nowTime = new Date().getTime();
        this.state={
            remindTime: props.finalTime - nowTime
        }
    }
    componentDidMount() {
        var interval = setInterval(()=>{
            this.setState({
                remindTime : this.state.remindTime - 90
            })
        },90)
    }

    render() {
        const str=formatDuration(this.state.remindTime,"h:mm:ss.S");
        return <div className={"TimeUpdate"}>
            <div style={styles.text}>
                { str }
            </div>
        </div>
    }
}
export default TimeUpdate;
