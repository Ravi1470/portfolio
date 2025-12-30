import Home from "./Components/Home";
import NavBar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="flex flex-col select-none bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <NavBar />

      <main className="w-full max-w-6xl mx-auto">
        <section
          id="home"
          className="h-screen flex items-center justify-center">
          <Home />
        </section>

        <section
          id="about"
          className="h-screen flex items-center justify-center">
          <About />
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
