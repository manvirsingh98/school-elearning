import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Notfound from "./pages/Notfound";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// export const PublicRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return (
//           <>
//             <Header />
//             <Component {...rest} {...props} />
//           </>
//         );
//       }}
//     />
//   );
// };
