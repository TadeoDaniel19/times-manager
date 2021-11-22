import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard";
import LoginComponent from "../components/login";
import SignIn from "../components/signUp";

const RootRouter = ()  => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Login</h1>} />
          <Route exact path="/log-in" element={<LoginComponent />} />
          <Route exact path="/sign-up" element={<SignIn />} />
          <Route exact path="/home" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RootRouter;