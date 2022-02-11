import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/user/login";
import Signup from "./pages/user/signup";
import Navbar from "./components/nav/navbar";
import Logout from "./pages/user/logout";
import Cook from "./pages/communities/cook";
import Workout from "./pages/communities/workout";
import MartialArts from "./pages/communities/MartialArts";
import VoiceLessons from "./pages/communities/VoiceLessons";
import Coding from "./pages/communities/coding";
import CreatePost from "./pages/CreatePost";
import ShowPosts from "./pages/practice";
import PostDetail from "./pages/PostDetails";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/logout" component={Logout}></Route>
            <Route exact path="/createpost" component={CreatePost} />
            <Route exact path="/practice" component={ShowPosts}></Route>
            <Route exact path="/cook" component={Cook}></Route>
            <Route exact path="/Workout/" component={Workout}></Route>
            <Route exact path="/Martial Arts/" component={MartialArts}></Route>
            <Route
              exact
              path="/Voice Lessons/"
              component={VoiceLessons}
            ></Route>
            <Route exact path="/coding/" component={Coding}></Route>{" "}
            <Route exact path="/:id/" component={PostDetail} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
