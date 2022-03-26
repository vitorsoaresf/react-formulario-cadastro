import { ContainerRoutes } from "./styles";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { AnimatePresence } from "framer-motion";

function Routes() {
  return (
    <ContainerRoutes>
      <AnimatePresence>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login/:name">
            <Login />
          </Route>
        </Switch>
      </AnimatePresence>
    </ContainerRoutes>
  );
}

export default Routes;
