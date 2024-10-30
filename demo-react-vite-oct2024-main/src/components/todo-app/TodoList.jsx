import { useState } from "react";

export default function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [allTasks, setAllTasks] = useState([
    {
      taskId: 101,
      taskName: "Call Friend",
      isTaskCompleted: false,
    },
    {
      taskId: 102,
      taskName: "Laundry",
      isTaskCompleted: false,
    },
  ]);

  function handleToggleTask(taskId) {
    // creating a copy of the state variable allTasks
    let copyAllTasks = [...allTasks];

    // now traversing through the copy and toggling the isTaskCompleted property
    copyAllTasks.forEach((eachTask) => {
      if (eachTask.taskId == taskId)
        eachTask.isTaskCompleted = !eachTask.isTaskCompleted;
    });
    // now set the updated copyAllTasks as the new state for allTasks state variable
    setAllTasks(copyAllTasks);
  }

  function handleDeleteTask(event, taskId) {
    //console.log(taskId);
    // refer this link to understand event bibbling and how to stop it
    // https://www.freecodecamp.org/news/event-bubbling-in-javascript/
    event.stopPropagation();
    let filteredAllTasks = allTasks.filter(
      (eachTask) => eachTask.taskId != taskId
    );
    setAllTasks(filteredAllTasks);
  }

  function handleAddTask(event) {
    if (event.key === "Enter") {
      setAllTasks([
        ...allTasks,
        {
          taskId: allTasks.length==0 ? 1 : allTasks[allTasks.length - 1].taskId + 1,
          taskName: newTask,
          isTaskCompleted: false,
        },
      ]);
      setNewTask("");
      event.target.value = "";
    }
  }
  let mappedAllTasks = allTasks.map((eachTask) => (
    <li
      key={eachTask.taskId}
      className="list-group-item"
      onClick={() => handleToggleTask(eachTask.taskId)}
    >
      {eachTask.isTaskCompleted ? "✔️" : ""} {eachTask.taskName}{" "}
      <button
        className="btn btn-danger"
        onClick={(e) => handleDeleteTask(e, eachTask.taskId)}
      >
        🗑️
      </button>
    </li>
  ));

  return (
    <>
      <div className="container m-5">
        <h3 className="text text-success">TODO APP</h3>
        <div className="form-control-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new Task"
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => handleAddTask(e)}
          />
          {/* <button className="btn btn-success my-2" onClick={handleAddTask}>
            ADD
          </button> */}
        </div>
        <ul className="list-group">{mappedAllTasks}</ul>
      </div>
    </>
  );
}
