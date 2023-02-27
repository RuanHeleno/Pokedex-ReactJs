import styled from "styled-components";

import { BsFillHeartFill } from "react-icons/bs";

export const Image = styled.img`
    width: 20%;
    height: 100%;
    margin-right: 1rem;
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
    flex: 1;
`;

export const CardBodyTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h3`
    text-transform: capitalize;
`;

export const Id = styled.p`
    font-weight: 100;
`;

export const CardBodyBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Types = styled.div`
    display: flex;
    gap: .5rem;
`;

export const Type = styled.p`
    text-transform: capitalize;
    border: 1px solid black;
    border-radius: 3rem;
    padding: .5rem 1rem;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const Heart = styled(BsFillHeartFill)`
    color: darkred;
    transition: all 400ms ease-in-out;

    &:hover {
        color: red;
    }
`