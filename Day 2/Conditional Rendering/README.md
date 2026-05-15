# 🎭 Conditional Rendering

## 🎯 Goal

Learn how React can show different UI based on component state.

This example uses a simple login/logout flow so you can see how a boolean value decides which component gets rendered. 🔐

---

## 👀 What’s in the Demo?

The app includes two small UI pieces:

- `LoginForm` shows a message and a Log In button. 👤
- `LogoutForm` shows a message, an Online badge, and a Log Out button. ✅

The main `App` component keeps `isLoggedIn` in state and uses that value to decide which screen to display.

---

## 🧠 How It Works

1. `isLoggedIn` starts as `false`. 🚪
2. Clicking Log In runs `handleLogin`, which changes state to `true`. 🔓
3. Clicking Log Out runs `handleLogout`, which changes state back to `false`. 🔒
4. A ternary expression chooses between the two components. 🧠

That is the React pattern in action: state changes, then the UI updates automatically.

---

## 🔑 Key Topics

- Ternary operators in JSX ✨
- State-driven UI changes 🔁
- Passing handlers as props 📦
- Showing one component or another 👀
- Thinking in app states instead of static pages 🧭

---

## 🧩 Code Focus

The most important idea is the conditional inside the return statement.

- If `isLoggedIn` is `true`, React renders `LogoutForm`. ✅
- If `isLoggedIn` is `false`, React renders `LoginForm`. ❌

That keeps the logic small, readable, and easy to extend later.

---

## ✨ Why This Matters

Conditional rendering is how React apps feel dynamic. Login screens, modals, loading states, error messages, and dashboards all use the same basic idea. 🎭

Once you understand this pattern, you can build interfaces that respond naturally to user actions.

---

## 🧪 Try This

1. Change the text shown in each form. 📝
2. Add a loading state before the login view appears. ⏳
3. Replace the ternary with `&&` rendering for a quick comparison. 🔍
4. Add a third UI branch for a special welcome message. 🎉

