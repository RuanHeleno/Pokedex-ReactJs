import styled from "styled-components";

export const Image = styled.img`
    max-width: 20%;
    height: 80%;
    margin-right: 1rem;
    aspect-ratio: 1;
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
    font-size: 1.4rem;
    margin-bottom: .5rem;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
`;

export const Id = styled.p`
    color: white;
    font-weight: 300;
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
    border: 1px solid transparent;
    background-color: rgba(0, 0, 0, .4);
    border-radius: 3rem;
    padding: .5rem 1rem;
    transition: all 400ms ease-in-out;
    cursor: default;
    color: white;
    font-weight: 500;
    
    &:hover {
        background-color: transparent;
        border-color: white;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;