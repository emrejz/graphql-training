import { useQuery } from "@apollo/client";
import { getEmployees } from "../../gql/employee/queries";
import Card from "../../components/Card";
import "./index.scss";

export default () => {
  const { loading, data, error } = useQuery(getEmployees);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>An error occured.</h1>;

  return (
    <div className="homeContainer">
      {data?.employees.map((employee) => (
        <Card key={employee.id} {...employee} />
      ))}
    </div>
  );
};
