import { RECEIVE_VIDEO_ERRORS } from "./../actions/video_actions";
import { CLEAR_ERRORS } from "./../actions/error_actions";

const videosErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default videosErrorsReducer;