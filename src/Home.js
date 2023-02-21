import ToDoList from "./ToDoList";
import useFetch from "./useFetch";

const Home = () => {
  // Get necessary variables from custom hook 'useFetch'
  const {
    data: toDos,
    isPending,
    error,
  } = useFetch("https://violet-moth-hose.cyclic.app/toDos");

  return (
    <div className="App">
      <div className="content">
        {/* Display error message if there's an error */}
        {error && <div>{error}</div>}
        {/* Let user know if data is pending */}
        {isPending && <div>Loading...</div>}
        {/* Render to-do list if data is loaded */}
        {toDos && <ToDoList toDos={toDos} />}
      </div>
    </div>
  );
};

// Export component function so it can be used elsewhere, e.g. in index.js
export default Home;
