import { CREATE_TASK, DELETE, UPDATE_LINK, RENAME, COMPLETE } from "../actionTypes";

const initialState = {
    data: JSON.parse(window.localStorage.getItem('tasks'))
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case CREATE_TASK: {
            const newTask = action.payload;
            return {
                ...state,
                data: [...state.data, newTask]
            };
        }

        case DELETE: {
            const id = action.payload;
            let place;
            for(let i = 0; i < state.data.length; i++) {
                if(id === state.data[i].id) {
                    place = i;
                    break;
                }
            }
            return {
                ...state,
                data: [
                    ...state.data.slice(0, place),
                    ...state.data.slice(place+1)
                ]
            };
        }

        case RENAME: {
            const { "name": newName, id } = action.payload;
            let place;
            for(let i = 0; i < state.data.length; i++) {
                if(id === state.data[i].id) {
                    place = i;
                    break;
                }
            }
            return {
                ...state,
                data: [
                    ...state.data.slice(0, place),
                    {
                        name: newName,
                        id: state.data[place].id,
                        isComplete: state.data[place].isComplete,
                        link: state.data[place].link
                    },
                    ...state.data.slice(place+1)
                ]
            }
        }

        case UPDATE_LINK: {
            const { "link": updateLink, id } = action.payload;
            let place;
            for(let i = 0; i < state.data.length; i++) {
                if(id === state.data[i].id) {
                    place = i;
                    break;
                }
            }
            return {
                ...state,
                data: [
                    ...state.data.slice(0, place),
                    {
                        name: state.data[place].name,
                        id: state.data[place].id,
                        isComplete: state.data[place].isComplete,
                        link: updateLink
                    },
                    ...state.data.slice(place+1)
                ]
            };
        }

        case COMPLETE: {
            const id = action.payload;
            let place;
            for(let i = 0; i < state.data.length; i++) {
                if(id === state.data[i].id) {
                    place = i;
                    break;
                }
            }
            return {
                ...state,
                data: [
                    ...state.data.slice(0, place),
                    {
                        name: state.data[place].name,
                        id: state.data[place].id,
                        isComplete: 'true',
                        link: state.data[place].link
                    },
                    ...state.data.slice(place+1)
                ]
            };
        }

        default:
            return state;
    }
}
