import Task from "./Task";
import "../styles/Main.css";

const Main = ({ tasks, deleteTask }) => {
  return (
    <main>
      {tasks.map((task, index) => {
        return (
          <Task task={task} deleteTask={deleteTask} index={index} key={index} />
        );
      })}
    </main>
  );
};

export default Main;
