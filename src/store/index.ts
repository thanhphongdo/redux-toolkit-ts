import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { CounterState } from './features/counter/counter-slice';
import todosReducer, { TodosState } from './features/todos/todos-slice';

export interface RootState {
    counter: CounterState;
    todos: TodosState;
}

export default configureStore<RootState>({
    reducer: {
        counter: counterReducer,
        todos: todosReducer
    },
});
