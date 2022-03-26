import { ContainerButton } from "./styles";

function Button({ onClick, value }) {
  return <ContainerButton onClick={onClick}>{value}</ContainerButton>;
}

export default Button;
