# 🤖 Smart Assistant

A modern, responsive web application built with **React** and **Vite**. This project focuses on providing a clean user interface and efficient performance.

## 🚀 Features
- **Modern UI:** Designed with a focus on user experience.
- **Fast Development:** Built using Vite for near-instant HMR (Hot Module Replacement).
- **Responsive Design:** Optimized for various screen sizes.

## 🛠️ Tech Stack
- **Frontend:** React.js
- **Styling:** SCSS / CSS
- **Build Tool:** Vite

## 📦 Installation & Setup

1. **Clone the repository:**
```bash
   git clone https://github.com/sepideh238/smart-assistant.git
   
🏗️ Architecture Diagram
👤 User
  │
  ▼
🔍 Home Page
  │
  ▼
⌨️ Search Input
  │
  ▼
📄 Results Page
  │
  ▼
🃏 Product Cards
  │
  ▼
➕ Add to Compare
  │
  ▼
🧠 Compare State
  │
  ▼
📊 Compare Page
  │
  ▼
✨ Smart Recommendation

📦 Data Source
└── products.js

⚙️ Main Logic
└── compareLogic.js

🎨 Styling
└── SCSS files
🔁 Flow Overview
👤 User searches a product
        ↓
🔍 App filters mock data
        ↓
🃏 User selects products
        ↓
🧠 App stores selected items
        ↓
📊 Compare page shows table
        ↓
✨ Rule-based recommendation is calculated
📁 Project Structure
src/
├── components/
├── pages/
├── data/
├── utils/
└── styles/
