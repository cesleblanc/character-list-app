import logo from "./logo.svg";
import "./App.css";
import CharacterBanner from "./components/Character/characterBanner";
import DraggableWindow from "./components/Window/DraggableWindow";
import CharacterWindow from "./components/Character/characterWindow";
function App() {
  return (
    <div className="App">
      <CharacterWindow />
      <CharacterWindow />
      <CharacterWindow />
      <CharacterBanner />
    </div>
  );
}

export default App;
