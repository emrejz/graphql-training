import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { getEmployee } from "../../gql/employee/queries";
import "./index.scss";

export default () => {
  const { id } = useParams();
  const {
    loading,
    data: {
      employee: { name, surname, pic, role, vote, email, address } = {},
    } = {},
    error,
  } = useQuery(getEmployee, { variables: { id } });

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    toast.error("An error occured.");
  }
  return (
    <div className="detailContainer">
      <img src={pic} alt={name + surname} />
      <div className="body">
        <p>
          <b>name:</b> {name}
        </p>
        <p>
          <b>surname:</b> {surname}
        </p>
        <p>
          <b>role:</b> {role}
        </p>
        <p>
          <b>votes:</b> {vote}
        </p>
        <p>
          <b>email:</b> {email}
        </p>
        <p>
          <b>address:</b> {address}
        </p>
      </div>
    </div>
  );
};
