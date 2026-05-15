# 🔄 useEffect and Lifecycle

## 🎯 Goal

Learn how to run side effects when React state changes.

This example updates the document title and shows a message when the component is mounted, which makes it a good first look at lifecycle-style behavior in function components. 🌐

---

## 👀 What’s in the Demo?

The app uses two pieces of state:

- `count` stores the current counter value. 🔢
- `mountMsg` stores the text shown below the button. 💬

The effect hook updates the browser tab title and sets the mount message.

---

## 🧠 How It Works

1. The component renders with an initial count of 0. 0️⃣
2. `useEffect` runs after render. ⏱️
3. The effect updates `document.title` using the current count. 🏷️
4. The effect also sets the message to show that the component is mounted. 📍
5. Clicking Increment changes `count`, which causes the effect to run again. 🔁

This is a simple example of a side effect: work that reaches outside the React tree.

---

## 🔑 Key Topics

- The `useEffect` hook 🪝
- Dependency arrays 📌
- Side effects ⚙️
- Updating the document title 🏷️
- Thinking about mount and update behavior 🧭

---

## 🧩 Code Focus

The effect currently depends on `count`, so it runs after every count change.

If you want the mount message to run only once, that logic should use an empty dependency array or be split into a separate effect.

---

## ✨ Why This Matters

`useEffect` is how React components talk to the outside world. It is used for fetching data, setting up subscriptions, listening to browser events, syncing titles, and cleaning up resources when components go away. 🌍

This lesson gives you the core idea before you move on to more complex patterns.

---

## 🧪 Try This

1. Make the mount message appear only once. 🎬
2. Add a cleanup function to the effect. 🧹
3. Update the page title only when the count is even. ⚖️
4. Add a second effect for a different side effect. ➕

