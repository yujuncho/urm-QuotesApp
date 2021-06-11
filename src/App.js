import { Fragment } from "react";
import { Route, Redirect } from "react-router";

import MainNavigation from "./components/layout/MainNavigation";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes">
        <AllQuotes />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Fragment>
  );
}

export default App;
