import React from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    updateCounterByValue
} from '../../store/features/counter/counter-slice';
import { RootState } from '../../store/index';

class CounterCmp extends React.Component<{
    count: number,
    increment: typeof increment,
    decrement: typeof decrement,
    updateCounterByValue: typeof updateCounterByValue,
    incrementByAmount: typeof incrementByAmount,
}, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div style={{
                textAlign: 'center'
            }}>
                <div>{this.props.count}</div>
                <div>
                    <button onClick={() => this.props.decrement()}>-</button>
                    or
                    <button onClick={() => this.props.increment()}>+</button>
                    or
                    <button onClick={() => this.props.incrementByAmount(5)}>+5</button>
                    or
                    <button onClick={() => {
                        this.props.updateCounterByValue(10)
                    }}>is 10</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        count: state.counter.value
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        updateCounterByValue: (value: number) => dispatch(updateCounterByValue(value)),
        incrementByAmount: (value: number) => dispatch(incrementByAmount(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterCmp);