import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import TaskBoard from './TaskBoard';
import AddTask from './AddTask';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            errorMsg: ''
        };
    }

    componentDidMount() {
        this.getTasks();
    }

    getTasks() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                this.setState({tasks: response.data});
            }).catch(error => {
            this.setState({errorMsg: error.message})
        })
    }

    updateTaskList = (newTask) => {
        this.setState({tasks: newTask});
    }



    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Todo App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Task Board</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AddTask">Add Task</Link>
                            </li>
                        </ul>
                    </div>

                </nav>

                <Switch>
                    <Route exact path="/" render={(props) => (
                        <TaskBoard tasks={this.state.tasks} updateTaskList={this.updateTaskList}/>)}/>
                    <Route path="/addTask" render={(props) => (
                        <AddTask tasks={this.state.tasks} updateTaskList={this.updateTaskList}/>)}/>
                </Switch>
            </Router>
        );
    }
}

export default App;