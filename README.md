# 🤖 Smart Assistant

A modern, responsive web application built with React and Vite.  
This project is designed as a portfolio-ready frontend app focused on clean UI, smart product search, comparison, and a rule-based recommendation flow.

---

## 📌 Overview

Smart Assistant is a frontend project that demonstrates:

- React component-based architecture
- Responsive UI design
- Routing between pages
- Search and comparison workflow
- Mock data handling
- Rule-based recommendation logic

The goal of this project is to create a clean and professional user experience for comparing products in a simple and intuitive way.

---

## ✨ Features

- 🔍 Product search system
- 📄 Search results page
- 🃏 Reusable product card components
- ➕ Add to compare functionality
- 📊 Comparison page
- 🧠 Rule-based smart recommendation
- 📱 Responsive design
- 🎨 Clean SCSS styling
- ⚡ Fast development with Vite

---

## 🛠️ Tech Stack

- Frontend: React.js
- Styling: SCSS / CSS
- Build Tool: Vite
- Routing: React Router
- Data Source: Local mock data
- State Management: React hooks

---

## 📦 Installation & Setup

1) Clone the repository

git clone https://github.com/sepideh238/smart-assistant.git  
cd smart-assistant

2) Install dependencies

npm install

3) Run the development server

npm run dev

4) Open the app in browser

http://localhost:5173

---

## 🏗️ Architecture

User  
↓  
Home Page  
↓  
Search Input  
↓  
Results Page  
↓  
Product Cards  
↓  
Add to Compare  
↓  
Compare State  
↓  
Compare Page  
↓  
Smart Recommendation

Data Source  
products.js

Logic  
compareLogic.js

---

## 🔁 Application Flow

User searches for a product  
↓  
Application filters products from mock data  
↓  
Results appear as product cards  
↓  
User selects products to compare  
↓  
Selected products are stored in state  
↓  
Compare page shows products side by side  
↓  
Rule-based recommendation selects the best option

---

## 📁 Project Structure

src

assets  
components  
layout  
pages  
data  
utils  
styles

---

## 🧠 How Recommendation Works

The recommendation system currently uses a simple rule-based logic.

Example factors:

- Price
- RAM
- Battery
- Performance

The system selects the best product depending on these parameters.

Future versions may integrate real AI or external APIs.

---

## 🧪 Future Improvements

- Connect to real product APIs
- Advanced filtering and sorting
- Category browsing
- Backend integration
- Smarter recommendation engine

---

## 📸 Screenshots

Screenshots of the UI can be added here to demonstrate the interface.

---

## 📝 Roadmap

See ROADMAP.md for the development plan and upcoming features.

---

## 👩‍💻 Author

Sepideh Mihanzadeh

React Developer  
Karaj, Iran

---

## 📄 License

This project is created for educational and portfolio purposes.
