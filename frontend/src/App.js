import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Users from "./components/Users";
import NotAuthorized from "./components/NotAuthorized";
import Students from "./components/Students";
import CourseDetails from "./pages/CourseDetails";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/contact" component={Contact} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <ProtectedRoute
            userInfo={userInfo}
            path="/profile"
            component={Profile}
          />
          <ProtectedRoute
            userInfo={userInfo}
            path="/courses"
            component={Courses}
            exact
          />
          <ProtectedRoute
            userInfo={userInfo}
            path="/courses/:courseID"
            component={CourseDetails}
          />
          <AdminRoute
            userInfo={userInfo}
            roles={["admin"]}
            path="/admin/users"
            component={Users}
          />
          <AdminRoute
            userInfo={userInfo}
            roles={["admin", "teacher"]}
            path="/admin/students"
            component={Students}
          />
          <Route path="/notauthorized" component={NotAuthorized} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Component {...rest} {...props} />
          </>
        );
      }}
    />
  );
};

export const ProtectedRoute = ({ component: Component, userInfo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInfo) {
          return (
            <>
              {/* <AdminAsideNav /> */}
              <Component {...rest} {...props} />
            </>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export const AdminRoute = ({
  component: Component,
  roles,
  userInfo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInfo) {
          if (!roles.includes(userInfo.role)) {
            return (
              <Redirect
                to={{
                  pathname: "/notauthorized",
                }}
              />
            );
          }
          return (
            <>
              <Component {...rest} {...props} />
            </>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default App;
