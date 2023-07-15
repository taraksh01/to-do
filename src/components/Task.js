const Task = ({ task }) => {
  return (
    <div className="task">
      <p className="title">{task.title}</p>
      <p className="description">{task.description}</p>
    </div>
  );
};

export default Task;
