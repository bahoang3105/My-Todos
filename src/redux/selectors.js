export const getTaskState = store => store.listTask;

export const getListTask = store =>
    (getTaskState(store) === null) ? getTaskState(store).data : [];
