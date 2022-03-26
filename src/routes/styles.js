import styled from "styled-components";
import img from "../assets/background.jpg";

export const ContainerRoutes = styled.div`
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: url(${img});
  background-size: cover;

  @media (min-width: 768px) {
    height: 120vh;
  }
  @media (min-width: 1024px) {
    height: 100vh;
  }
`;
