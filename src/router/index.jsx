import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CommentsPage from "../components/commentsSection";
import Dashboard from "../components/dashboard";
import LoginComponent from "../components/login";
import ResourcesPage from "../components/resourcesSection";
import SignIn from "../components/signUp";
import Times from "../components/times";

const RootRouter = ()  => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginComponent />} />
          <Route exact path="/log-in" element={<LoginComponent />} />
          <Route exact path="/sign-up" element={<SignIn />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/times" element={<Times />}/>
          <Route exact path="/comments" element={<CommentsPage />} />
          <Route exact path="/resources" element={<ResourcesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RootRouter;