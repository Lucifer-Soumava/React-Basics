import Company from "./components/Company.jsx";

function App() {
  return (
    <div>
      <Company name="Alice" role="Developer" />
      <Company name="Bob" role="Designer" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);