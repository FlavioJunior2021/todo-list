import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
    display: flex;
    flex-direction: row;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    align-items: center;

    label {
        color: #b7d5ac;
        text-decoration: ${ done ? 'line-through': 'initial'};
    }

    input {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }
`))