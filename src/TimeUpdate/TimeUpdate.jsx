import React from 'react';
import {formatDuration} from "../Utils/TimeUtils";


const styles={
    text: {
        color: "red",
        fontSize:"100px",
        fontFamily:""
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
                remindTime : this.state.remindTime - 10
            })
        },10)
    }

    render() {
        const str=formatDuration(this.state.remindTime,"h:mm:ss.S");
        return <div className={"TimeUpdate"}>
            <div style={styles.text}>
                { str.slice(0,str.length - 1) }
            </div>
        </div>
    }
}
export default TimeUpdate;
