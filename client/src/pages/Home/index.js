import { useMemo } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { getEmployees } from "../../gql/employee/queries";
import Card from "./components/Card";
import "./index.scss";

export default () => {
  const { loading, data, error } = useQuery(getEmployees);

  const sortedEmployees = useMemo(
    () => [...(data?.employees || [])].sort((a, b) => b?.vote - a?.vote),
    [data?.employees]
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    toast.error("An error occured.");
  }
  return (
    <div className="homeContainer">
      {sortedEmployees?.map((employee) => (
        <Card key={employee.id} {...employee} />
      ))}
    </div>
  );
};
