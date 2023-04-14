import { Link } from "react-router-dom";
import "./index.scss";

export default ({ id, name, pic, surname, role, vote }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Link className="cardContainer" to={"/employee/" + id}>
      <img src={pic} alt={name + surname} />
      <div className="body">
        <h4>
          <b>{name + " " + surname}</b>
        </h4>
        <p>role: {role}</p>
        <p>vole: {vote}</p>
        <button type="button" onClick={handleClick}>
          vote
        </button>
      </div>
    </Link>
  );
};
