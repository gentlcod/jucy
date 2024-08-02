import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import MainHome from "./components/MainHome";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact_And_Footer from "./components/Contact_And_Footer";



export default function Home() {



  return (
    <>
      <Preloader />
      <Navbar />
      <MainHome />
      <About/>
      <Menu/>
      <Contact_And_Footer />
    </>
  );
}
