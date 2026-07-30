import Navbar from "../components/layout/Navbar";
import Hero from "../components/common/Hero";
import ProjectInput from "../components/forms/ProjectInput";
import Features from "../components/common/Features";

function Home() {

  return (

    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <Hero />

      <ProjectInput />

      <Features />

    </div>

  );

}

export default Home;