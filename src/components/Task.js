import "../styles/Task.css";
import trash from "../images/trash.svg";
import edit from "../images/edit.svg";
// import complete from "../images/check-circle.svg";

const Task = ({ task, deleteTask, editTask, index }) => {
  const handleClick = () => {
    deleteTask(index);
  };

  return (
    <div className="task">
      <p className="title">{task.title}</p>
      <p className="description">{task.description}</p>
      <div className="action">
        <img src={trash} alt="delete" onClick={handleClick} />
        <img src={edit} alt="edit" />
        {/* <img src={complete} alt="complete" /> */}
      </div>
    </div>
  );
};

export default Task;
