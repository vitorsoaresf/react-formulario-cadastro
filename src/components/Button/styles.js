import styled from "styled-components";

export const ContainerButton = styled.button`
  height: 50px;
  width: 210px;
  border-radius: 5px;
  border: none;
  background-color: #f78fb3;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 500px;
  position: absolute;
  transition: background-color 1s;

  :hover {
    background-color: #c67590;
    color: white;
  }

  @media (min-width: 768px) {
    width: 410px;
  }
`;
