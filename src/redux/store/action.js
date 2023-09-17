import {
  LOADING,
  SET_LAN,
  SET_FAQ,
  SET_INFO,
  SET_IMAGES,
  SET_TEAMS,
  SET_PARTNERS,
} from "./types";

export const setLoading = (loading) => {
  return {
    type: LOADING,
    loading,
  };
};

export const setLan = (lan) => ({
  type: SET_LAN,
  lan,
});

export const setFaq = (faq) => ({
  type: SET_FAQ,
  faq,
});

export const setInfo = (info) => ({
  type: SET_INFO,
  info,
});

export const setImages = (images) => ({
  type: SET_IMAGES,
  images,
});

export const setTeams = (teams) => ({
  type: SET_TEAMS,
  teams,
});

export const setPartners = (partners) => ({
  type: SET_PARTNERS,
  partners,
});
