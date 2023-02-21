import { useNavigate } from "react-router-dom";

const ToDoList = ({ toDos }) => {
  const navigate = useNavigate();

  return (
    <div className="to-do-list">
      {toDos.map((toDo) => (
        <article className="to-do" key={toDo.id}>
          <input type="checkbox" id="checkbox" />
          <div className="to-do-info">
            <label className="strikethrough" htmlFor="checkbox">
              {toDo.text}
            </label>
            <div className="date-time">{toDo.time}</div>
          </div>
          <button
            onClick={() => {
              fetch("https://violet-moth-hose.cyclic.app/toDos/" + toDo.id, {
                method: "DELETE",
              }).then(() => {
                navigate(0);
              });
            }}
          >
            Delete
          </button>
        </article>
      ))}
    </div>
  );
};

export default ToDoList;
