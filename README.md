# 🎸 GuitarLA - Guitar E-commerce

A modern and interactive e-commerce project for selling guitars, built with **React** and **TypeScript**. This project features a fully functional shopping cart with data persistence and a centralized state architecture.

## ✨ Key Features

* **Dynamic Cart Management:** Users can add guitars, and increase (+) or decrease (-) the quantity of each item with controlled maximum limits.
* **Total User Control:** Option to remove individual items from the cart (❌) or clear the entire cart with a single click.
* **Data Persistence:** Native integration with `localStorage`. Users won't lose their selected items if they close or refresh the page.
* **Real-time Calculations:** The total price and item subtotal are automatically and efficiently updated.

## 🛠️ Technologies and Tools

* **Core:** React 18 + TypeScript + Vite.
* **Styling:** Tailwind CSS (v4).
* **Deployment:** Vercel / GitHub Pages.

## 🧠 Concepts and Architecture (React Hooks)

The project is built applying React best practices, strictly separating logic from the UI:

* **`useReducer`:** Used to centralize all complex cart logic (add, remove, clear) via actions and a *dispatch* function, eliminating *prop drilling* and significantly improving code scalability.
* **`useState` & `useEffect`:** For initial state management and continuous data synchronization with the browser's API (`localStorage`).
* **`useMemo`:** Implemented to memorize heavy calculations (like the cart total) and prevent unnecessary re-renders, boosting the application's performance.

## 🚀 How to run the project locally

1. Clone this repository:
   ```bash
   git clone [https://guitarla-comerce.vercel.app]