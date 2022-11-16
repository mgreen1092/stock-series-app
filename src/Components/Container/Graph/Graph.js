import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

function Graph (props) {
    return (
        <LineChart
          width={800}
          height={400}
          data={props.graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="high"
            stroke="green"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="low"
            stroke="red"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" stroke="green"/>
          <Line type="monotone" stroke="red" /> */}
        </LineChart>
      );
}

export default Graph