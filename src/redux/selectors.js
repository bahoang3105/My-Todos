export const getTaskState = store => store.listTask;

export const getListTask = store =>
    (getTaskState(store).data !== null) ? getTaskState(store).data : [];
