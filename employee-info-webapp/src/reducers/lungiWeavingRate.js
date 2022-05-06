import {eventConstants, cookiesConstants} from "../constants"
import {sessionManager} from "../managers/sessionManager";

let rate = sessionManager.getDataFromLocalStorage(cookiesConstants.CURRENT_LUNGI_WEAVING_RATE) || "";

let initialState = {
    currentLungiWeavingRate: rate && JSON.parse(rate) || {"cotton":0,"terrycot":0}
};
export default function LungiWeavingRate(state = initialState, action) {
    switch (action.type) {
     case eventConstants.CHANGE_LUNGI_WEAVING_RATE:
      sessionManager.setDataInLocalStorage(cookiesConstants.CURRENT_LUNGI_WEAVING_RATE, action.data)
      return {
        ...state,
        currentLungiWeavingRate: action.data
      };
    default:
        return state;
    }
}