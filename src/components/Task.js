const Task = ({ task }) => {
  return (
    <div className="task">
      <p>{task.title}</p>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
