import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 300px;
  height: 600px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;

  background-color: rgb(255, 255, 255, 0.9);
  box-shadow: 0 0 0.5em gray;

  h1 {
    color: rgb(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1024px) {
    width: 500px;
    margin: 100px auto;
    margin-bottom: 100px;
  }

  @media (min-width: 1400px) {
    width: 500px;
    margin-right: 200px;
  }
`;
