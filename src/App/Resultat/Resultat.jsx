import "./Resultat.css";

function Resultat(props) {
  return (
    <>
      <div>
        <li>
          <a href={props.lien} target="_blank">
            {props.lien}
          </a>
        </li>
      </div>
    </>
  );
}
export default Resultat;
