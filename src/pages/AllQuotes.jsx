import { Route } from "react-router";

import Quote from "./Quote";
import Layout from "../components/layout/Layout";
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
  const MOCK_QUOTES = [];
  // const MOCK_QUOTES = [
  //   { id: "q1", author: "Bob", text: "One love" },
  //   { id: "q2", author: "Marley", text: "Three little birds" },
  //   { id: "q3", author: "Author", text: "Stand together" }
  // ];

  return (
    <Layout>
      <Route path="/quotes" exact>
        {MOCK_QUOTES.length > 0 && <QuoteList quotes={MOCK_QUOTES} />}
        {MOCK_QUOTES.length === 0 && <NoQuotesFound />}
      </Route>
      <Route path="/quotes/:quoteId">
        <Quote />
      </Route>
    </Layout>
  );
};

export default AllQuotes;
