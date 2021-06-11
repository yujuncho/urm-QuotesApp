import { useParams } from "react-router";

import Layout from "../components/layout/Layout";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const Quote = () => {
  const params = useParams();

  const MOCK_QUOTES = [
    { id: "q1", author: "Bob", text: "One love" },
    { id: "q2", author: "Marley", text: "Three little birds" },
    { id: "q3", author: "Author", text: "Stand together" }
  ];

  const { text, author } = MOCK_QUOTES.filter(item => {
    return item.id === params.quoteId;
  })[0];

  return (
    <Layout>
      <HighlightedQuote text={text} author={author} />
      <Comments />
    </Layout>
  );
};

export default Quote;
