import Menu from "../layouts/Menu/Menu";
import Footer from "../layouts/Footer/Footer";
import "./Search.css";
import { useEffect, useState } from "react";
import Resultat from "../Resultat/Resultat";
function Search() {
  // Variables d'état
  const [search, setSearch] = useState("");
  const [wikiList, setWikiList] = useState([]);

  // Fonctions

  /* Récupérer l'input dans la variable d'état search */
  const getInput = (e) => {
    setSearch(e.target.value);
  };

  /* Fetch de l'API Wikipédia */
  const getWikiResponse = async () => {
    let wikiResponse = await fetch(
      `https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${search}&format=json`
    );
    console.log("wikiResponse : ", wikiResponse);
    let wikiDonnees = await wikiResponse.json();
    console.log("wikiDonnees : ", wikiDonnees);
    setWikiList(wikiDonnees[3]);
    console.log("wikiList : ", wikiList);
    setSearch("");
  };

  /* Affichage de la réponse stockée dans le tableau wikiList */
  const displayWikiResponse = () => {
    /* Boucle sur le tableau wikiList */
    return wikiList.map((item, key) => {
      return <Resultat key={key} lien={item} />;
    });
  };

  /* useEffect pour récupérer instantanément la valeur */
  useEffect(() => {
    console.log(
      "Valeur de la variable d'état search update avec useEffect : ",
      search
    ),
      [search];
  });

  return (
    <>
      <div>
        <Menu />
      </div>
      <div className="searchBarWrapper">
        <input
          type="text"
          id="searchBar"
          value={search}
          onChange={getInput}
          placeholder="Rechercher sur Wikipédia"
        />
        <button className="valider" onClick={getWikiResponse}>
          Valider
        </button>
      </div>
      <div className="wikiAnswer">
        <ul>{displayWikiResponse()}</ul>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Search;
