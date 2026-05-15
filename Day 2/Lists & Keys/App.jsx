
function App() {
  const todos = [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Build a project", done: false },
    { id: 3, text: "Deploy to production", done: false },
  ];

  const [showAll, setShowAll] = useState(true);

  // Filter todos
  const visibleTodos = showAll
    ? todos
    : todos.filter((todo) => !todo.done);

  return (
    <div>
      <button
        id="filter-btn"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Active" : "Show All"}
      </button>

      <span id="count">
        {visibleTodos.length}
      </span>

      <ul id="todo-list">
        {visibleTodos.map((todo) => (
          <li
            key={todo.id}
            data-id={todo.id}
            className={todo.done ? "done" : ""}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}