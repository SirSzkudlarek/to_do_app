import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => a.finishDate - b.finishDate);
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div>
        <h2>To do tasks:</h2>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>You don't have any task, it shouldn't be like this..</p>
        )}
      </div>

      <hr />

      <div>
        <h2>
          Task completed <em>({done.length}):</em>
        </h2>
        {doneTasks > 5 && <p>Only last five task are visable.</p>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
