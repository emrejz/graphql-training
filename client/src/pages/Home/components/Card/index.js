import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { voteEmployee } from "../../../../gql/employee/mutations";
import "./index.scss";

export default ({ id, name, pic, surname, role, vote }) => {
  const [addTodo, { loading, error }] = useMutation(voteEmployee, {
    variables: {
      id,
    },
  });

  if (error) {
    toast.error("An error occured.");
  }

  const handleClick = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <Link className="cardContainer" to={"/employee/" + id}>
      <img src={pic} alt={name + surname} />
      <div className="body">
        <h4>
          <b>{name + " " + surname}</b>
        </h4>
        <p>role: {role}</p>
        <p>votes: {vote}</p>
        <button disabled={loading} type="button" onClick={handleClick}>
          vote
        </button>
      </div>
    </Link>
  );
};
