import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import {
    Task,
    addTask
} from '../../store/features/todos/todos-slice';
import { RootState } from '../../store/index';

class TodosCmp extends React.Component<{
    tasks: Array<Task>;
    addTask: typeof addTask
}, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => {
                        this.props.addTask({
                            id: this.props.tasks.length + 1,
                            desc: 'this is your task',
                            status: 'new'
                        })
                    }}>add new task</button>
                </div>
                <div>
                    {
                        this.props.tasks.map((task, index) => (
                            <div key={index}>{task.id} - {task.desc}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        tasks: state.todos.tasks
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addTask: (task: Task) => dispatch(addTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosCmp);
