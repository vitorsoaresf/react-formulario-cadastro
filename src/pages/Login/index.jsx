import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { ContainerLogin } from "./styles";
import { motion } from "framer-motion";

function Login() {
  const history = useHistory();
  const { name } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ContainerLogin>
        <div></div>
        <h1>Bem vindo(a)!</h1>
        <p>{name.split(" ")[0]}</p>
        <button value="VOLTAR" onClick={() => history.push("/")}>
          Back to Home
        </button>
      </ContainerLogin>
    </motion.div>
  );
}

export default Login;
