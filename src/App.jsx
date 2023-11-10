import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <Header />
      <Section title="Inicio" color="epic_blue" />
      <Section title="Iniciativas" color="epic_green" />
      <Section title="Sobre nós" color="epic_yellow" />
      <Section title="Contato" color="epic_red" />
    </div>
  );
}

export default App;
