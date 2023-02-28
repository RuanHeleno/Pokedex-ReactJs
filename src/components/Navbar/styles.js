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

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 15%;

  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 35%;
  }
`;

export const Favorites = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #345692;
  border-radius: 10px;
  padding: 0.3rem 1rem;
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

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Heart = styled(BsFillHeartFill)`
  color: red;
`;
