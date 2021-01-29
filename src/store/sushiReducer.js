import { sushiActionTypes } from "../actions/action-types";

const initialState = {
    sushiList: []
}

export default function sushiReducer(state = initialState, action) {
    switch (action.type) {
        case sushiActionTypes.FETCH_SUSHI_LIST:
            return { ...state, sushiList: action.payload }
            
        default:
            return state;
    }
}