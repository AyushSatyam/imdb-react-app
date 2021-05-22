import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Tvshows from "./components/screens/TvShows";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ margin: "10px" }}>
        <Switch>
          <Route path="/movies">
            <Main />
          </Route>
          <Route path="/tvshow">
            <Tvshows />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
