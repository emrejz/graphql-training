import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { getEvents } from "../../gql/event/queries";
import Table from "../../components/Table";
import { headers } from "./constants";

export default () => {
  const { data, loading, error } = useQuery(getEvents);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    toast.error("An error occured.");
  }

  return (
    <div onClick={handleClick}>
      <h2>Events</h2>
      <Table headers={headers} columns={data?.events} />
    </div>
  );
};
