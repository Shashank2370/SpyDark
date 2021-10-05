import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Layout from "./components/Navbar/Layout";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Login />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
