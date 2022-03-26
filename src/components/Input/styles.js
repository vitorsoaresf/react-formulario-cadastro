import styled from "styled-components";

export const ContainerInput = styled.input`
  border-radius: 10px;
  border: unset;
  background-color: #f1f2f6;
  height: 40px;
  width: 200px;
  font-size: 1rem;
  margin-top: 5px;
  box-shadow: ${(props) => (props.error ? "0 0 0.5em red" : "unset")};
  font-family: "Roboto", sans-serif;
  color: rgb(0, 0, 0, 0.5);

  ::placeholder {
    color: #9b9b9b;
  }

  :focus {
    outline: unset;
    border: 1px solid #d170af;
    box-shadow: 0 0 0.5em #fda7df;
    border-radius: 10px;
    background-color: white;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const ContainerCheckBox = styled.input`
  height: 20px;
  width: 20px;
  box-shadow: ${(props) => (props.error ? "0 0 0.5em red" : "unset")};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    position: absolute;
    margin-top: 90px;
    height: 10px;
    font-size: 0.6rem;
    color: red;
  }

  span {
    margin-top: 20px;
    color: rgb(0, 0, 0, 0.5);
  }

  label {
    font-size: 0.9rem;
    color: rgb(0, 0, 0, 0.5);
  }

  div {
    width: 200px;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
      width: 410px;
      justify-content: flex-start;
    }
  }
`;
