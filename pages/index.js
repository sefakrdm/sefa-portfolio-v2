
//* Components
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="smooth-wrapper" className="scroller">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Works />
        <Contact />
      </main>
      <footer className="py-10 flex justify-center items-center">
        <div className="text-white">Copyright &copy; {currentYear} Sefa Karademir</div>
      </footer>
    </div>
  );
}
