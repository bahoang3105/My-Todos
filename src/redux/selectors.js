export const getTaskState = store => store.listTask;

export const getListTask = store =>
    getTaskState(store) ? getTaskState(store).data : [];
