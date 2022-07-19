import React from "react";
import NodeComponent from "./NodeComponent";

const ButtonsBlock = ({ setNodes }) => {
    return (
        <>
            <button
                onClick={() => {
                    setNodes((p) => [
                        ...p,
                        {
                            id: `${p.length + 1}`,
                            type: "input",
                            data: { label: <NodeComponent apple /> },
                            position: { x: 100, y: (p.length + 2) * 10 },
                            sourcePosition: "right",
                        },
                    ]);
                }}
            >
                Add Apple
            </button>

            <button
                onClick={() => {
                    setNodes((p) => [
                        ...p,
                        {
                            id: `${p.length + 1}`,
                            type: "output",
                            data: { label: <NodeComponent reverse /> },
                            position: { x: 650, y: (p.length + 2) * 10 },
                            targetPosition: "left",
                        },
                    ]);
                }}
            >
                Add Android
            </button>
        </>
    );
};

export default ButtonsBlock;
