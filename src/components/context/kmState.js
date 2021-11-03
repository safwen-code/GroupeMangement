
import kmContext from "./kmContext";
import { GET_KMS, DEL_KM, UPDATE_KM, ADD_KM } from "./type";
import { useReducer } from "react";
import kmReducer from "./kmReducer";

const kmState = ({ children }) => {
  const initialState = {
    kminfo: [],
    users: [],
    sableuse: [],
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(kmReducer, initialState);

  return (
    <kmContext.Provider
      value={{
        kminfo: state.kminfo,
        users: state.users,
        sableuse: state.sableuse,
      }}
    >
      {children}
    </kmContext.Provider>
  );
};
export default kmState;
