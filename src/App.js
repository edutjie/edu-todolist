import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TodoDone from "./pages/TodoDone";
import TodoHome from "./pages/TodoHome";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <TodoHome />
        </Route>
        <Route path="/done" exact={true}>
          <TodoDone />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
