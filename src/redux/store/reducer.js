import {
  LOADING,
  SET_LAN,
  SET_FAQ,
  SET_INFO,
  SET_IMAGES,
  SET_TEAMS,
  SET_PARTNERS,
} from "./types";

const initialState = {
  // craft_reviews: [],
  loading: false,
  lan: "UZ",
  faq: [],
  info: {},
  images: [],
  teams: [],
  partners: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case CRAFT_REVIEWS:
    //   return {
    //     ...state,
    //     craft_reviews: action.craft_reviews,
    //   };
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_LAN:
      return {
        ...state,
        lan: action.lan,
      };
    case SET_FAQ:
      return {
        ...state,
        faq: action.faq,
      };
    case SET_INFO:
      return {
        ...state,
        info: action.info,
      };
    case SET_IMAGES:
      return {
        ...state,
        images: action.images,
      };
    case SET_TEAMS:
      return {
        ...state,
        teams: action.teams,
      };
    case SET_PARTNERS:
      return {
        ...state,
        partners: action.partners,
      };
    default:
      return state;
  }
};
export default reducer;
