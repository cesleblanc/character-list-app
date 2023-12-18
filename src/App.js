import logo from "./logo.svg";
import "./App.css";
import CharacterBanner from "./components/Character/characterBanner";
import DraggableWindow from "./components/Window/DraggableWindow";
function App() {
  return (
    <div className="App">
      <CharacterBanner />
      <DraggableWindow />
    </div>
  );
}

export default App;
