import {
  GET_KMS,
  ADD_KM,
  SET_CURRENT_KM,
  CLEAR_CURRENT_KM,
  UPDATE_KM,
} from "./type";

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
    case SET_CURRENT_KM:
      return {
        ...state,
        currentKm: payload,
      };
    case UPDATE_KM:
      return {
        ...state,
        kmsInfo: state.kmsInfo.map((kminfo) =>
          kminfo.id === payload ? payload : kminfo
        ),
      };
    case CLEAR_CURRENT_KM:
      return {
        ...state,
        currentKm: null,
      };
    default:
      return state;
  }
};

export default RducerKm;
