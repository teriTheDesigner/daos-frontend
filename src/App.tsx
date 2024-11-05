import "./App.css";
import IndexHeader from "./components/IndexHeader/IndexHeader";
import Nav from "./components/Nav/Nav";
import UserReviews from "./components/UserReviews/UserReviews";

import LatestPostsSection from "./components/LatestPostsSection/LatestPostsSection";
import FeedbackBanner from "./components/FeedbackBanner/FeedbackBanner";
import Footer from "./components/Footer/Footer";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <Nav />
      <LoginForm />
      {/* <CreateUserForm /> */}
      <IndexHeader />
      <UserReviews />
      <LatestPostsSection />
      <FeedbackBanner />
      <Footer />
    </>
  );
}

export default App;
