function App() {
  const year = 2026;

  return (
      <div>
        <h1>"Hello, React!"</h1>
        <p>{year}</p>
        <p className="subtitle">Myself Soumava</p>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);