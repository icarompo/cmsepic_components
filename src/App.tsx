import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="pt-24 pb-40 w-screen h-screen overflow-y-scroll">
      <Header />
      <Section />
      <Section />
      <Section />
      <Footer />
    </div>
  );
}

export default App;