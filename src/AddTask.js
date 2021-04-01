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
        this.props.push("/")
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
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddTask;