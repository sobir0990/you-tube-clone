import {COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS} from "../actionType";

export const commentListReducer= (
    state = {
        loading: true,
        comments: [],
    },
    action
) => {

    const {payload, type} = action;

    switch (type) {
        case COMMENT_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };

        case COMMENT_LIST_SUCCESS:
            // console.log('coments', payload)
            return {
                ...state,
                comments: payload,
                loading: false
            };

        case COMMENT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
