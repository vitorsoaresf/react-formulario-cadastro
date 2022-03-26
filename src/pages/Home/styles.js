import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  section {
    display: none;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
    align-items: center;

    section {
      width: 400px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
      background-color: rgb(247, 143, 179, 0.5);
      color: white;
      font-family: "Dancing Script", cursive;
      animation-name: leftSection;
      animation-duration: 3s;

      h2 {
        border-radius: 5px;
        font-size: 6rem;
        background-color: white;
        color: rgb(247, 143, 179, 0.5);
        padding: 10px;
      }

      p {
        border-radius: 5px;
        margin-top: -100px;
        background-color: aqua;
        font-size: 3rem;
        color: rgb(247, 143, 179, 0.9);
        padding: 10px;
      }
    }
  }

  @media (min-width: 1400px) {
    section {
      width: 500px;
    }
  }

  @keyframes leftSection {
    0% {
      margin-left: -500px;
    }

    100% {
      margin-left: 0;
    }
  }
`;
