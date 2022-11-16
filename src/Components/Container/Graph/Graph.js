import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    //ResponsiveContainer
  } from "recharts";

function Graph (props) {
    return (
        //<ResponsiveContainer width="50%" height="50%">
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
                    activeDot={{ r: 4 }}
                />
                <Line
                    type="monotone"
                    dataKey="low"
                    stroke="red"
                    activeDot={{ r: 4 }}
                />
                {/* <Line type="monotone" dataKey='low' stroke="red"/>
                <Line type="monotone" dataKey='low' stroke="red" /> */}
            </LineChart>
        //</ResponsiveContainer>
      );
}

export default Graph