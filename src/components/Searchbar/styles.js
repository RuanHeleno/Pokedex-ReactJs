import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const Input = styled.input`
  padding: 0.2rem 0.3rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: 2px solid transparent;
  width: 10%;
  transition: all 400ms ease-in-out;

  &:focus {
    outline: none;
    border-color: lightgreen;
    width: 15%;
  }
`;

export const Button = styled.button`
  background-color: #345692;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 400ms ease-in-out;

  &:hover {
    border-color: white;
    color: white;
    background-color: transparent;
  }
`;
