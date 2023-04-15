import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import { useMutation } from "@apollo/client";
import { addEvent } from "./gql/event/mutations";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [addEventForLoging] = useMutation(addEvent);

  const handleClick = ({ type, target: { outerHTML } }) => {
    addEventForLoging({
      variables: { type, target: outerHTML },
    });
  };

  return (
    <div onClick={handleClick}>
      <Router />
      <ToastContainer />
    </div>
  );
};
