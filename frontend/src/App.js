import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Notfound from "./pages/Notfound";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import CoursesPage from "./pages/CoursesPage";
import Users from "./components/Users";
import NotAuthorized from "./components/NotAuthorized";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PublicRoute path="/contact" component={ContactPage} />
          <PublicRoute path="/login" component={LoginPage} />
          <PublicRoute path="/signup" component={SignupPage} />
          <ProtectedRoute
            userInfo={userInfo}
            path="/profile"
            component={ProfilePage}
          />
          <ProtectedRoute
            userInfo={userInfo}
            path="/courses"
            component={CoursesPage}
          />
          <AdminRoute
            userInfo={userInfo}
            roles={["admin", "teacher"]}
            path="/admin/users"
            component={Users}
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
