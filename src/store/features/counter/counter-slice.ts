import { createSlice, createAction } from '@reduxjs/toolkit';

export const updateCounterByValue = createAction<number>('updateCounterByValue');

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateCounterByValue, (state: CounterState, action) => {
            state.value = action.payload;
        }).addDefaultCase((state, action) => { })
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: any) => (dispatch: any) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

export const selectCount = (state: any): number => state.counter.value;

export default counterSlice.reducer;
