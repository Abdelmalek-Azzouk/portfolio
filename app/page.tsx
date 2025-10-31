import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="container">
        <h1 className="text-3xl font-bold mb-6">My AI Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Melanoma Detection with ViT"
            description="A Vision Transformer-based model for melanoma classification with Sauvola preprocessing."
            link="#"
          />
          <ProjectCard
            title="XML Music Artist Search"
            description="Python + Flask app that searches Algerian artists using XML & XSLT."
            link="#"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
