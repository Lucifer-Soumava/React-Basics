function App() {
  const [count, setCount] = useState(0);
  const [mountMsg, setMountMsg] = useState('');

  // Add your useEffect hooks here
  useEffect (() => {
    document.title = `Count: ${count}`
    setMountMsg("Component is mounted!")
  }, [count]);

  return (
    <div>
      <h2 id="count">Count: {count}</h2>
      <button id="increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p id="mounted">{mountMsg}</p>
    </div>
  );
}