/* eslint-disable no-console */

import React from 'react';

type State = {
  today: Date;
  clockName: string;
};

type Props = {};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
  };

  timerId = 0;

  timerTimeUpdate = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerTimeUpdate = window.setInterval(() => {
      console.log(this.state.today.toUTCString().slice(-12, -4));
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerTimeUpdate);
  }

  render() {
    const { clockName, today } = this.state;

    return (
      <>
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </>
    );
  }
}
