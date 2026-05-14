# 📚 JSX Basics - Your First Steps into React

## 🎬 The Story

Welcome to your React journey! This is where it all begins. **JSX Basics** is your introduction to the magical world of React, where you'll learn how to write HTML-like syntax right inside JavaScript.

Think of JSX as a superpower that lets you write code that looks like HTML but runs as JavaScript. It's the bridge between the familiar world of HTML and the dynamic world of JavaScript.

---

## 🎯 What Does This Code Do?

This simple demo shows:

✨ **A basic React component** that displays:
- A friendly greeting: `"Hello, React!"`
- The current year: `2026`
- A personalized subtitle: `"Myself Soumava"`

---

## 🔍 Key Concepts Explained

### 📌 JSX Syntax
```jsx
<h1>"Hello, React!"</h1>
```
This looks like HTML, but it's actually JavaScript! React transforms this into `React.createElement()` calls behind the scenes.

### 🎨 Dynamic Content with Curly Braces
```jsx
<p>{year}</p>
```
Anything inside `{...}` is JavaScript. You can put variables, expressions, or function calls here!

### 🏷️ HTML Attributes
```jsx
<p className="subtitle">Myself Soumava</p>
```
Note: We use `className` instead of `class` because `class` is a reserved keyword in JavaScript.

### 🎪 React Rendering
```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```
This tells React where to display your component (inside the element with id `root`) and what component to show.

---

## ⚙️ How to Run

1. **Open `index.html`** in your browser
2. The React libraries are loaded from CDN
3. Your JSX code is transformed by Babel (a JavaScript compiler)
4. The component renders inside the `<div id="root"></div>`

---

## 📝 What You'll Learn

- ✅ JSX syntax basics
- ✅ How to write HTML in JavaScript
- ✅ Dynamic content with variables
- ✅ Using className instead of class
- ✅ How React renders components to the DOM

---

## ⚠️ Important Note

> **📌 This is a standalone JSX file for demonstration purposes only!**
> 
> It will **NOT** run as-is in a production environment. It requires:
> - The HTML file (`index.html`) to load React libraries via CDN
> - A browser to execute the code
> - This is designed for learning - not for actual applications!

---

## 🚀 Next Steps

Once you master JSX basics, move on to:
- **Components & Props** - Learn how to create reusable pieces
- **State & UseState** - Learn how to make your app interactive!

Happy coding! 🎉
