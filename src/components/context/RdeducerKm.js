import { GET_KMS, ADD_KM } from "./type";

// eslint-disable-next-line import/no-anonymous-default-export
const RducerKm = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_KMS:
      return {
        ...state,
        loading: false,
      };
    case ADD_KM:
      return {
        ...state,
        kmsInfo: [...state.kmsInfo, payload],
      };

    default:
      return state;
  }
};

export default RducerKm;
