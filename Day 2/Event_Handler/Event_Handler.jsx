function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const button = () => {
    setItems([...items, inputValue])
    setInputValue('')
  };

  return (
    <div>
      {/* Add input, button, and list here */}
      <input id="item-input" placeholder="Enter an item" value={inputValue} onChange={handleChange}></input>
      <button id="add-btn" onClick={button}>Submit</button>

      <ul id="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}