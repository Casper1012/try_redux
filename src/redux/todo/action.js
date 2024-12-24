export const addTask = (data) => ({
    type: "ADD_TASK",
    payload: data,
});

export const fetchTask = (data) => ({
    type: "FETCH_TASK",
    payload: data,
});

export const deleteTask = (data) => ({
    type: "DELETE_TASK",
    payload: data,
});

export const updateTask = (data) => ({
    type: "UPDATE_TASK",
    payload: data,
});