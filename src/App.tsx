import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <hr className="container mx-auto h-[1px] border-t border-dark-primary" />
      <Skills />
      <hr className="container mx-auto h-[1px] border-t border-dark-primary" />
    </div>
  );
}

export default App;
