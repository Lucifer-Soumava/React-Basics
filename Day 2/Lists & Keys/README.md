# 📋 Lists and Keys

## 🎯 Goal

Learn how to render a list of items and keep React happy with stable keys.

This example shows a todo list that can switch between all tasks and only active tasks, which makes it easy to see how filtering and mapping work together. 🗂️

---

## 👀 What’s in the Demo?

The app uses a fixed `todos` array and a `showAll` state value. 📦

When `showAll` is true, every todo is displayed. When it is false, the app filters out completed items and shows only the active ones.

---

## 🧠 How It Works

1. The button toggles `showAll`. 🔀
2. The app derives `visibleTodos` from the current state. 🧠
3. `visibleTodos` is rendered with `map()`. 📋
4. Each `<li>` gets a stable `key` from `todo.id`. 🔑
5. Completed items receive the `done` class. ✅

This keeps the source data separate from the visible data, which makes the rendering logic easier to read and maintain.

---

## 🔑 Key Topics

- Rendering arrays with `map()` 🧩
- Filtering lists before rendering 🧹
- Using unique keys 🔐
- Conditional class names 🎨
- Toggling between views 🔄

---

## 🧩 Code Focus

The most important rule here is that keys should come from stable data, not from the item position when you can avoid it.

This demo uses `todo.id`, which helps React track each list item correctly when the list changes.

---

## ✨ Why This Matters

Rendering lists is one of the most common things you do in React. Product cards, message threads, menus, notifications, todo lists, and search results all use the same basic pattern. 🧾

Good keys make updates predictable and help React render efficiently. ⚙️

---

## 🧪 Try This

1. Add a new todo to the array. ➕
2. Change the filter to show only completed tasks. 🟢
3. Add a count of completed todos. 🔢
4. Sort the list before rendering it. ↕️

