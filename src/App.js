// Global style
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail.js";
import OurWork from "./pages/OurWork";
// Components
import Nav from "./components/Nav.js";
// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
