import React, { Component } from "react";
import { Timeline } from "antd";
import "./timeline.css";

class MyTimeline extends Component {
  state = {
    items: [
      { id: 1, label: "step1 2015-09-01" },
      { id: 2, label: "step1 2015-09-01" },
      { id: 3, label: "step1 2015-09-01" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Timeline>
            {this.state.items.map(item => (
              <Timeline.Item key={item.id}>{item.label}</Timeline.Item>
            ))}
            {/* <Timeline.Item>step1 2015-09-01</Timeline.Item>
            <Timeline.Item>step2 2015-09-01</Timeline.Item>
            <Timeline.Item>step3 2015-09-01</Timeline.Item>
            <Timeline.Item>step4 2015-09-01</Timeline.Item> */}
          </Timeline>
        </div>
      </React.Fragment>
    );
  }
}

export default MyTimeline;
