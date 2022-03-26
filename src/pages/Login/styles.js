import styled from "styled-components";
import img from "../../assets/background_flowers.jpg";

export const ContainerLogin = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100vw;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 300px;
    height: 200px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    /* transform: rotate(45deg); */
    border-radius: 10px;
  }

  h1 {
    font-family: "Dancing Script", cursive;
    font-size: 2.5rem;
    position: absolute;
    margin-bottom: 150px;
  }

  p {
    font-family: "Dancing Script", cursive;
    font-size: 4rem;
    position: absolute;
    margin-bottom: 100px;
  }
  button {
    height: 50px;
    width: 120px;
    border-radius: 5px;
    border: none;
    background-color: #f78fb3;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    transition: background-color 1s;
    margin-top: 100px;

    :hover {
      background-color: #c67590;
      color: white;
    }
  }

  @media (min-width: 375px) {
    div {
      width: 260px;
      height: 260px;
      transform: rotate(45deg);
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 150px;
    }

    p {
      font-size: 4rem;
      margin-bottom: 100px;
    }

    button {
      height: 50px;
      width: 120px;
      transition: background-color 1s;
      margin-top: 150px;
    }
  }

  @media (min-width: 425px) {
    div {
      width: 300px;
      height: 300px;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 200px;
    }

    p {
      font-size: 4rem;
    }
    button {
      height: 50px;
      width: 120px;
      margin-top: 200px;
    }
  }

  @media (min-width: 768px) {
    background-image: url(${img});
    background-size: cover;
    width: 100vw;
    height: 120vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 400px;
      height: 400px;
    }

    h1 {
      font-size: 4.5rem;
    }

    p {
      font-size: 5rem;
    }
    button {
      height: 50px;
      width: 210px;
    }
  }

  @media (min-width: 1024px) {
    height: 120vh;
  }
`;
