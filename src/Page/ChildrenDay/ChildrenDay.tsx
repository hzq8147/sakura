import React from "react";
import './ChildrenDay.scss';
import {getString} from "./String";

interface ChildrenDayState {
    text:string;
    showBlock:boolean;
}
export default class ChildrenDay extends React.Component<any, ChildrenDayState>{

    private static ShowString =getString();

    private tn:any;
    constructor(props:any) {
        super(props);
        this.state={
            text:"",
            showBlock:false
        }
    }
    componentDidMount(): void {
        this.startShow();
    }

    private async showTerminal():Promise<void>{
        return new Promise((resolve)=>{
            let char;
            let index:number = 0;
            this.tn =setTimeout(()=>{
                setInterval(()=>{
                    if (index <= ChildrenDay.ShowString.length - 1) {
                        char = ChildrenDay.ShowString[index];
                        this.setState({
                            text: this.state.text + char
                        });
                        index++;
                    }else {
                        resolve();
                    }
                },100)
            },1000)
        })
    }

    private async clearTerminal():Promise<void>{
        this.setState({
            text:""
        })
    }

    private showFlower():void{
        this.setState({

        })
    }

    private async startShow():Promise<void>{
       await this.showTerminal();
       this.tn = setTimeout(()=>{
           this.clearTerminal();
       },3000);


    }

    componentWillUnmount(): void {
        clearTimeout(this.tn);
    }

    render(): React.ReactNode{
        return (<div className={"root"}>
            <div className={"textContainer show"}>
                {this.state.text}
            </div>

            </div>)
    }
}
