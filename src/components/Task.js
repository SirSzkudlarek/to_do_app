import React from "react";

const Task = (props) => {
  const important_style = {
    color: "tomato",
  };
  const { id, text, date, important, active, finishDate } = props.task;
  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? important_style : null}>{text}</strong> -
          until <span>{date} </span>
          <button onClick={() => props.change(id)}>Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong>{text}</strong> <em>- (until {date}) </em>
          <br />- task done: <span>{finish}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
