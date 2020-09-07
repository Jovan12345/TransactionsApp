import {  SORTBUTTONCLICKED } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case SORTBUTTONCLICKED:
            return action.payload;
        default:
            return state;
    }
};