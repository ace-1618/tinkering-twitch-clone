import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_STREAMS, GET_STREAM, DELETE_STREAM, EDIT_STREAM } from "./types";
import streams from '../api/streams';
// import { formValues } from "redux-form";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = (formValues) => {
    return async (dispatch) => {
        const response = await streams.post('/streams', formValues);
        dispatch({ type: CREATE_STREAM, payload: response.data });
    }
}

export const getStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({ type: GET_STREAMS, payload: response.data });
    }
}

export const getStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({ type: GET_STREAM, payload: response.data });
    }
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({ type: DELETE_STREAM, payload: id });
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.put(`/streams/${id}`, formValues);
        dispatch({ type: EDIT_STREAM, payload: response.data });
    }
}