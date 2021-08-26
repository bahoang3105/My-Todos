import { CREATE_TASK, RENAME, UPDATE_LINK, COMPLETE, DELETE } from "./actionTypes";

export const createTask = name => ({
    type: CREATE_TASK,
    payload: {
        "id": name,
        "name": name,
        "isComplete": "false",
        "link": ""
    }
});

export const rename = (id, name) => ({
    type: RENAME,
    payload: {
        name,
        id
    }
});

export const updateLink = (id, link) => ({
    type: UPDATE_LINK,
    payload: {
        link,
        id
    }
});

export const complete = id => ({
    type: COMPLETE,
    payload: id
});

export const del = id => ({
    type: DELETE,
    payload: id
});