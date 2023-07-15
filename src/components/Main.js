import Task from "./Task";
import "../styles/Main.css";

const Main = ({ tasks }) => {
  return (
    <main>
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </main>
  );
};

export default Main;
