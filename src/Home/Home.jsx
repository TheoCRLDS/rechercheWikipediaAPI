import Menu from "../layouts/Menu/Menu";
import Footer from "../layouts/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <h2>Bienvenue sur la recherche Wikipedia</h2>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
