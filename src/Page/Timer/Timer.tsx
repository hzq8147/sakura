import * as React from 'react';
import { formatDuration } from '../../Utils/TimeUtils';
import './Timer.scss';

interface TimerState {
  timeStamp: number;
}

export default class Timer extends React.Component<any, TimerState> {
  private static startTime: number = 1591852623000;
  private tn: any;

  constructor(props: any) {
    super(props);
    this.state = {
      timeStamp: 0
    };
  }

  componentDidMount(): void {
    this.setState({
      timeStamp: Date.now() - Timer.startTime
    });

    this.tn = setInterval(() => {
      this.setState({
        timeStamp: this.state.timeStamp + 1000
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.tn);
  }

  render(): React.ReactNode {
    return (
      <div className={'root'}>
        <div className={'timeContainer'}>
          <div className={'text'}>{formatDuration(this.state.timeStamp, 'ddd')}</div>
          <div className={'text'}>{formatDuration(this.state.timeStamp, 'hh:mm:ss')}</div>
        </div>
      </div>
    );
  }
}
