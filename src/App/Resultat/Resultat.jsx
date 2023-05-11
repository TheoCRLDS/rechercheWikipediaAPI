import "./Resultat.css";

function Resultat(props) {
  return (
    <>
      <div>
        <li>
          <a href={props.lien}>{props.lien}</a>
        </li>
      </div>
    </>
  );
}
export default Resultat;
