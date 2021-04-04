import React from 'react';

class AddTask extends React.Component {
    state = {
        title: "",
        type: ""
    }

    addTask = (event) => {
        event.preventDefault()
        let newTask = this.props.tasks;
        newTask.push({"id": newTask.length + 1, "title": this.state.title, "type": this.state.type});
    }

    render() {
        return (
            <div className="container">
                <h4>Add Task</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="addTask">Title</label>
                        < input type="text" className="form-control" id="taskAdd"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addTask">Type</label>
                        <select className="form-control" id="taskAdd">
                            <option value="task">Task</option>
                            <option value="feature">Feature</option>
                            <option value="bug">Bug</option>
                        </select>
                    </div>
                    <button type="submit" onClick={this.addTask} className="btn btn-primary">Add Task</button>
                </form>
            </div>
        );
    }
}

export default AddTask;