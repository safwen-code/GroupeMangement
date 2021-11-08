import {
  GET_KMS,
  ADD_KM,
  SET_CURRENT_KM,
  CLEAR_CURRENT_KM,
  UPDATE_KM,
} from "./type";

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
    currentKm: null,
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

  //setcurrentKM to edite
  const setCurrentKm = (kminfo) => {
    dispatch({ type: SET_CURRENT_KM, payload: kminfo });
  };
  //clear current km
  const clearCurrentKm = () => {
    dispatch({ type: CLEAR_CURRENT_KM });
  };

  //updatekms
  const updateKmInfo = (kmForm) => {
    dispatch({ type: UPDATE_KM, payload: kmForm });
  };

  //delKms

  return (
    <ContextKm.Provider
      value={{
        kmsInfo: state.kmsInfo,
        loading: state.loading,
        currentKm: state.currentKm,
        AddKm,
        getAllKms,
        setCurrentKm,
        clearCurrentKm,
        updateKmInfo,
      }}
    >
      {children}
    </ContextKm.Provider>
  );
};

export default StateKm;
