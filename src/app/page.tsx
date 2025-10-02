import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Footer from "./components/Footer";

function Page() {
  return (
    <div className="scroll-smooth font-sans text-gray-800 bg-gray-50">
      <Navbar />
      <main>
        <Profile />
        <About />
        <Experience />
        <Research />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
