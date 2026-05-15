# 🎮 Event Handler

## 🎯 Goal

Practice responding to user input with React event handlers.

This example lets the user type into an input, submit the text with a button, and add the result to a list. 📝

---

## 👀 What’s in the Demo?

The app keeps two pieces of state:

- `inputValue` stores whatever the user is typing. ⌨️
- `items` stores the submitted list entries. 📚

The input is controlled, which means React owns the value. When the button is clicked, the current text is saved into the list and the input is cleared.

---

## 🧠 How It Works

1. `handleChange` runs every time the input changes. ✏️
2. It updates `inputValue` using `setInputValue`. 🔄
3. The button handler pushes the current value into `items`. ➕
4. The input gets reset to an empty string. 🧼
5. The list is rendered from `items` using `map()`. 📋

This is a classic React form pattern: state reflects the input, events update the state, and rendering shows the latest data.

---

## 🔑 Key Topics

- `onChange` events ✏️
- `onClick` events 🖱️
- Controlled inputs 🎛️
- Updating arrays in state 🔁
- Rendering lists from user input 📜

---

## 🧩 Code Focus

The important idea is that the UI does not manage itself.

React state stores the current form value, and event handlers update that state. That gives you a predictable input and a list that always matches what the user entered. 🎯

---

## ✨ Why This Matters

Nearly every real React app needs event handlers: forms, buttons, dropdowns, search inputs, filters, toggles, and more. This lesson is the foundation for those interactions. 🧰

---

## 🧪 Try This

1. Prevent empty items from being added. 🚫
2. Trim whitespace before saving an item. ✂️
3. Add a delete button for each list item. 🗑️
4. Make Enter submit the form too. ⌨️

