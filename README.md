# Smart Assistant (v3.0)

A responsive, data-driven React application built with Vite, featuring dynamic product fetching, search filtering, and a product comparison system.

---

## 🚀 What's New in v3.0

This version marks the transition from static mock data to a dynamic, API-driven architecture:

- **REST API Integration:** Connected the frontend to a local mock REST API using `json-server`.
- **Dynamic Assets:** Migrated product images to the `public/` directory for stable, dynamic routing without Vite bundling interference.
- **Asynchronous Data Fetching:** Replaced local import arrays with asynchronous HTTP requests using `axios`.
- **URL-State Filtering:** Implemented search and category filtering directly tied to the URL using React Router's `useSearchParams`.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router
- **Styling:** SCSS
- **API Client:** Axios
- **Database/API:** JSON-Server (Running on port 3001)
- **Build Tool:** Vite

---

## 📦 How to Run v3.0

### 1. Clone & Install
```bash
git clone https://github.com/sepideh238/smart-assistant.git
cd smart-assistant
npm install
2. Start the Mock API Server
In a separate terminal, run the database server:

bash
npx json-server --watch db.json --port 3001
3. Start the React Application
In your main terminal, run:

bash
npm run dev
👩‍💻 Author
Sepideh Mihanzadeh