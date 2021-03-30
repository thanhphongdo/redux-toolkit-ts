import { createSlice } from '@reduxjs/toolkit';

export interface Task {
    id: number,
    desc: string;
    status: 'new' | 'inprogress' | 'done'
}

export interface TodosState {
    tasks: Array<Task>;
}

const initialState: TodosState = {
    tasks: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action: {
            type: string;
            payload: Task;
        }) => {
            state.tasks.push(action.payload);
        }
    }
});

export const { addTask } = todosSlice.actions;


export default todosSlice.reducer;