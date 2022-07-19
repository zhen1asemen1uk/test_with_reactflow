import React, { useState } from "react";
import { DiAndroid, DiApple } from "react-icons/di";
import styled from "styled-components";

const Wrapp = styled.div`
    display: flex;
    flex-direction: ${({ fd }) => fd || "row"};
    align-items: center;
    justify-content: space-between;
`;

const InputStyled = styled.input`
    width: 80%;

    border-radius: 2px;

    border: none;
    outline: none;
`;

const NodeComponent = ({ apple, reverse }) => {
    const [text, setText] = useState(apple ? "Apple" : "Android");
    const [isWrite, setIsWrite] = useState(false);

    return (
        <Wrapp fd={reverse && "row-reverse"} onClick={() => setIsWrite(true)}>
            {apple ? <DiApple /> : <DiAndroid />}
            <InputStyled
                disabled={!isWrite}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </Wrapp>
    );
};

export default NodeComponent;
