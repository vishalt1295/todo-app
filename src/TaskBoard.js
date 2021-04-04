import React from "react";
import App from './App';
class TaskBoard extends React.Component {

   /** displayTasks = (tasks) => {
        return(
        <div className="card" key={tasks.id}>
            <div className="card-body">
                <h5 className="card-title">{tasks.title}</h5>
                <p className="card-text">ID: {tasks.id}</p>
                <p className="card-text">ID: {tasks.type}</p>

            </div>
        </div>
        );
    } */

    render() {
        return this.props.tasks.map((task) => {

            //return (<h1>{task.id} {task.column}</h1>)

            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>To Do</h4>
                            {task.column === "todo"}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{task.title}</h5>
                                    <p className="card-text">ID: {task.id}</p>
                                    <p className="card-text">Type: {task.type}</p>

                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <h4>In Progress</h4>
                            {task.column === "in-progress"}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{task.title}</h5>
                                    <p className="card-text">ID: {task.id}</p>
                                    <p className="card-text">Type: {task.type}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <h4>Done</h4>

                            <div className="card">
                                {task.column === "done"}
                                <div className="card-body">
                                    <h5 className="card-title">{task.title}</h5>
                                    <p className="card-text">ID: {task.id}</p>
                                    <p className="card-text">Type: {task.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )



        })
    }

    /**render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>To Do</h4>
                        {task.type}
                    </div>

                    <div className="col">
                        <h4>In Progress</h4>

                    </div>

                    <div className="col">
                        <h4>Done</h4>

                    </div>
                </div>
            </div>
        )
    } */


}

export default TaskBoard;
