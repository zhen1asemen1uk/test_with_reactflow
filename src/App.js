import React, { useEffect, useCallback } from "react";
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
} from "react-flow-renderer";

import styled from "styled-components";

import NodeComponent from "./components/NodeComponent";
import ButtonsBlock from "./components/ButtonsBlock";

const Wrapp = styled.div`
    padding: 5px;
    width: 100%;
    height: 100vw;

    background: #1a192b;
`;

const App = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        setNodes([
            {
                id: "1",
                type: "input",
                data: { label: <NodeComponent apple /> },
                position: { x: 100, y: 0 },

                sourcePosition: "right",
            },
            {
                id: "2",
                type: "output",
                data: { label: <NodeComponent reverse /> },
                position: { x: 650, y: 0 },
                targetPosition: "left",
            },
        ]);
    }, [setNodes]);

    const onConnect = useCallback(
        (params) =>
            setEdges((eds) =>
                addEdge(
                    { ...params, animated: true, style: { stroke: "#fff" } },
                    eds
                )
            ),
        [setEdges]
    );

    return (
        <Wrapp>
            <ButtonsBlock setNodes={setNodes} />

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                defaultZoom={1.5}
            >
                <MiniMap />
                <Controls />
            </ReactFlow>
        </Wrapp>
    );
};

export default App;
