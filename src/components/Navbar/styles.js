import styled from "styled-components";

import { BsFillHeartFill } from "react-icons/bs";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0 2rem;
`;

export const LeftSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Logo = styled.img`
  width: 15%;
`;

export const Favorites = styled.button`
  display: flex;
  align-items: center;
  gap: .5rem;
  background-color: #345692;
  border-radius: 10px;
  padding: .3rem 1rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 400ms ease-in-out;
  
  &:hover {
    background-color: transparent;
    border-color: white;
  }

  p {
    color: white;
  }

  p::before {
    content: "|   ";
  }
`

export const Heart = styled(BsFillHeartFill)`
  color: red;
`;
