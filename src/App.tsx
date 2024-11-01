import "./App.css";
import IndexHeader from "./components/IndexHeader/IndexHeader";
import Nav from "./components/Nav/Nav";
import UserReviews from "./components/UserReviews/UserReviews";

import LatestPostsSection from "./components/LatestPostsSection/LatestPostsSection";
import FeedbackBanner from "./components/FeedbackBanner/FeedbackBanner";

function App() {
  return (
    <>
      <Nav />
      <IndexHeader />
      <UserReviews />
      <LatestPostsSection />
      <FeedbackBanner />
    </>
  );
}

export default App;
