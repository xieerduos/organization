import React from "react";
import { FlowAnalysisGraph } from "@ant-design/charts";

const DemoFlowAnalysisGraph = () => {
    const data = {
        nodes: [
            {
                id: "0",
                value: { title: "兴盛优选-大中华区0" },
            },
            {
                id: "1",
                value: { title: "鼎湖区网格站1" },
            },
            {
                id: "2",
                value: { title: "怀集诗洞桥头站2" },
            },
            {
                id: "3",
                value: { title: "封开县站3" },
            },
            {
                id: "4",
                value: { title: "司机4" },
            },
            {
                id: "5",
                value: { title: "拣货员5" },
            },
            {
                id: "6",
                value: { title: "拣货员6" },
            },
            {
                id: "7",
                value: { title: "拣货员7" },
            },
            {
                id: "8",
                value: { title: "司机8" },
            },
            {
                id: "9",
                value: { title: "拣货员9" },
            },
            {
                id: "10",
                value: { title: "王五10" },
            },
            {
                id: "11",
                value: { title: "李四11" },
            },
            {
                id: "12",
                value: { title: "张三12" },
            },
            {
                id: "13",
                value: { title: "站长13" },
            },
            {
                id: "14",
                value: { title: "站长14" },
            },
            {
                id: "15",
                value: { title: "站长15" },
            },
            {
                id: "16",
                value: { title: "司机16" },
            },
        ],
        edges: [
            {
                source: "10",
                target: "1",
            },
            {
                source: "11",
                target: "1",
            },
            {
                source: "12",
                target: "1",
            },
            {
                source: "10",
                target: "2",
            },
            {
                source: "11",
                target: "2",
            },
            {
                source: "12",
                target: "2",
            },
            {
                source: "10",
                target: "3",
            },
            {
                source: "11",
                target: "3",
            },
            {
                source: "12",
                target: "3",
            },
            {
                source: "0",
                target: "10",
            },
            {
                source: "0",
                target: "11",
            },
            {
                source: "0",
                target: "12",
            },

            {
                source: "1",
                target: "13",
            },
            {
                source: "13",
                target: "4",
            },
            {
                source: "13",
                target: "5",
            },
            {
                source: "13",
                target: "6",
            },
            {
                source: "2",
                target: "14",
            },
            {
                source: "14",
                target: "7",
            },
            {
                source: "14",
                target: "8",
            },
            {
                source: "3",
                target: "15",
            },
            {
                source: "15",
                target: "9",
            },
            {
                source: "15",
                target: "16",
            },
        ],
    };
    const config = {
        data,
        nodeCfg: {
            type: "rect",
            anchorPoints: [
                [0.5, 1],
                [0.5, 0],
            ],
            title: {
                style: {
                    fill: "#000",
                    fontSize: 12,
                },
            },
        },
        edgeCfg: {
            type: "polyline",
            endArrow: {
                fill: "#ccc",
            },
        },
        layout: {
            rankdir: "TB",
        },
    };

    return <FlowAnalysisGraph {...config} />;
};

export default DemoFlowAnalysisGraph;
