import "./App.css";
import EpisodesPage from "./component/EpisodesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayAllShows from "./component/DisplayAllShows";
import ShowCasting from "./component/ShowCasting";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DisplayAllShows} />
        <Route path="/episodes/:id" component={EpisodesPage} />
        <Route path="/show-cast/:id" component={ShowCasting} />
      </Switch>
    </Router>
  );
}

export default App;
