import { Fragment, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

import QuoteDetail from "./QuoteDetail";
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const AllQuotes = () => {
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuotes || loadedQuotes.length === 0) {
    return (
      <Route path={`${match.path}`} exact>
        <NoQuotesFound />
      </Route>
    );
  }

  return (
    <Fragment>
      <Route path={`${match.path}`} exact>
        <QuoteList quotes={loadedQuotes} />
      </Route>
      <Route path={`${match.path}/:quoteId`}>
        <QuoteDetail />
      </Route>
    </Fragment>
  );
};

export default AllQuotes;
