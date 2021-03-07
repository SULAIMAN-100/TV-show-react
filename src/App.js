import "./App.css";
import LandingPage from "./component/LandingPage";
import { EpisodesContextProvider } from "./component/GetAllEpisodes";
function App() {
  return (
    <div className="App">
      <EpisodesContextProvider>
        <LandingPage />
      </EpisodesContextProvider>
    </div>
  );
}

export default App;
