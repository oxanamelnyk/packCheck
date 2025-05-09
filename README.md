
# 🧳 Pack Check

**Pack Check** is a React-based CRUD app, like a TODO list, that helps you manage your packing checklist. Built with Vite, Zustand for state management, and localStorage for persistence.

---

## ✨ Features

- ✅ Add new items
- 🗑️ Delete items
- 📦 Mark items as packed or unpacked
- 🔁 Four control buttons:
  - Mark all as complete
  - Mark all as incomplete
  - Reset to initial state
  - Remove all items
- 🔃 Sort items (via a select dropdown)
- 📊 Count of packed vs total items
- 💾 Data persisted in local storage

---

## 🛠 Tech Stack

- React + Vite
- Zustand (with persist middleware)
- CSS (custom styles)
- Local Storage

---

## 📂 Folder Structure

```
src/
├── assets/               # Static assets (images, icons, etc.)
├── components/           # Reusable UI components
│   ├── AddItemForm.jsx
│   ├── BackgroundHeading.jsx
│   ├── Button.jsx
│   ├── ButtonGroup.jsx
│   ├── Counter.jsx
│   ├── EmptyView.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ItemList.jsx
│   ├── Logo.jsx
│   └── Sidebar.jsx
├── constants/            # Utility functions, data, custom hooks
│   ├── hooks.js
│   └── lib.jsx
├── stores/               # Zustand store setup
│   └── itemsStore.jsx
├── main.jsx              # Application entry point
├── index.css             # Global styles
└── App.jsx               # Main app component
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/pack-check.git
cd pack-check
npm install
npm run dev
```

---

## 📜 License

This project is licensed under the MIT License.
