import "../styles/SideBar.css";

const SideBar = ({ tasks }) => {
  return (
    <section className="side-bar">
      <div>
        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <p>{task.title}</p>
              <p>{task.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
