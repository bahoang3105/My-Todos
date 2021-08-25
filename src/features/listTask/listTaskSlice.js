import { createSlice } from "@reduxjs/toolkit";

export const listTaskSlice = createSlice({
    name: 'listTask',
    initialState: {
        value: JSON.parse(window.localStorage.getItem('tasks')),
        task: {}
    },
    reducers: {
        createTask: (state, action) => {
            let data = state.value;
            data.push(action.payload);
            window.localStorage.setItem('tasks',JSON.stringify(data));
            state.value = data;
        },
        del: (state, action) => {
            let data = state.value;
            let id = action.payload;
            for(let i = 0; i < data.length; i++) {
                if(id === data[i].id) {
                    data.splice(i, 1);
                    break;
                }
            }
            window.localStorage.setItem('tasks', JSON.stringify(data));
            state.value = data;
        },
        rename: (state, action) => {
            let data = state.value;
            let id = action.payload.id;
            for(let i = 0; i < data.length; i++) {
                if(id === data[i].id) {
                    data[i].name = action.payload.newName;
                    break;
                }
            }
            window.localStorage.setItem('tasks', JSON.stringify(data));
            state.value = data;
        },
        complete: (state, action) => {
            let data = state.value;
            let id = action.payload;
            for(let i = 0; i < data.length; i++) {
                if(id === data[i].id) {
                    data[i].isComplete = 'true';
                    break;
                }
            }
            window.localStorage.setItem('tasks', JSON.stringify(data));
            state.value = data;
        },
        updateLink: (state, action) => {
            let data = state.value;
            let id = action.payload.id;
            for(let i = 0; i < data.length; i++) {
                if(id === data[i].id) {
                    data[i].link = action.payload.link;
                    break;
                }
            }
            window.localStorage.setItem('tasks', JSON.stringify(data));
            state.value = data;
        }
    }
});

export const { createTask, del, complete, rename, updateLink } = listTaskSlice.actions;

export const selectListTask = state => state.listTask.value;

export default listTaskSlice.reducer;