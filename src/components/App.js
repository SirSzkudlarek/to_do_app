import { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 5;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Finish "The Stormlight Archive"',
        date: "2024-09-01",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Expolre ancient Greek History",
        date: "2024-12-24",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Find a job as Front-end Developer",
        date: "2024-09-26",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Become even more muscular and decrese fat amount",
        date: "2024-07-01",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Work on your daily behaviore",
        date: "2024-12-31",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    this.setState({ tasks });
  };

  changeTaskStatus = (id) => {
    console.log("done elementu o id " + id);
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({ tasks });
    console.log(this.state.tasks);
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };
  render() {
    return (
      <div className="App">
        <h1>Task organizer</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
