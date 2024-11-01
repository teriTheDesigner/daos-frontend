import "./App.css";
import IndexHeader from "./components/IndexHeader/IndexHeader";
import Nav from "./components/Nav/Nav";
import UserReviews from "./components/UserReviews/UserReviews";
import PostingCard from "./components/PostingCard/PostingCard";

function App() {
  return (
    <>
      <Nav />
      <IndexHeader />
      <UserReviews />
      <PostingCard />
    </>
  );
}

export default App;
