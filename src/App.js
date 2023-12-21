import logo from "./logo.svg";
import "./App.css";
import CharacterBanner from "./components/CharacterBanner/characterBanner";
import CharacterWindow from "./components/CharacterBanner/characterWindow";
import CharacterListWrapper from "./components/Window/CharacterListWrapper";
function App() {
  return (
    <div className="App">
      <CharacterListWrapper />
    </div>
  );
}

export default App;
