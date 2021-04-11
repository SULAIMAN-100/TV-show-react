import "./App.css";
import EpisodesPage from "./component/EpisodesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayAllShows from "./component/DisplayAllShows";
import ShowCasting from "./component/ShowCasting";
import EpisodesCast from "./component/EpisodesCast";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DisplayAllShows} />
        <Route path="/episodes/:id" component={EpisodesPage} />
        <Route path="/episode-cast/:id" component={EpisodesCast} />
        <Route path="/show-cast/:id" component={ShowCasting} />
      </Switch>
    </Router>
  );
}

export default App;
