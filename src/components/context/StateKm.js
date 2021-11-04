import { GET_KMS, ADD_KM } from "./type";

import RducerKm from "./RdeducerKm";
import ContextKm from "./ContextKm";
import { useReducer } from "react";
const StateKm = ({ children }) => {
  const initialState = {
    kmsInfo: [
      {
        id: 1,
        kmName: "1",
        article: "53701/53700",
        Date: Date.now(),
        users: [
          {
            id: 1,
            name: "nader",
            formée: true,
            role: "machine",
          },
          {
            id: 2,
            name: "rania",
            formée: true,
            role: "215",
          },
          {
            id: 3,
            name: "safwen",
            formée: false,
            role: "215",
          },

          {
            id: 4,
            name: "sirine",
            formée: false,
            role: "215",
          },
        ],
        sableuse: [
          {
            id: 1,
            articleName: "700/701",
            usersName: [
              {
                nameUser: "refka",
                formée: true,
              },
              {
                nameUser: "na3ima",
                formée: true,
              },
              {
                nameUser: "sofien",
                formée: true,
              },
            ],
          },
        ],
      },
    ],
    loading: true,
  };
  const [state, dispatch] = useReducer(RducerKm, initialState);

  //add kms
  const AddKm = (kmForm) => {
    dispatch({ type: ADD_KM, payload: kmForm });
  };

  //getKms
  const getAllKms = () => {
    dispatch({ type: GET_KMS });
  };

  //delKms

  //updatekms

  return (
    <ContextKm.Provider
      value={{
        kmsInfo: state.kmsInfo,
        loading: state.loading,
        AddKm,
        getAllKms,
      }}
    >
      {children}
    </ContextKm.Provider>
  );
};

export default StateKm;
