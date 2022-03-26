import Form from "../../components/Form";
import { ContainerHome } from "./styles";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ContainerHome>
        <section>
          <h2>Welcome</h2>
          <p>to the flowers</p>
        </section>
        <Form />
      </ContainerHome>
    </motion.div>
  );
}

export default Home;
