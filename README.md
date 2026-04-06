# 🌱 EcoVest – Sustainable Investment Platform

<p align="center">
  <b>Invest Smart. Invest Sustainable.</b> 🌍  
</p>

<p align="center">
  A full-stack web application that empowers users to make <b>ethical, data-driven investment decisions</b> using ESG analysis.
</p>

---

## 🚀 Live Demo

> *(Add your deployed link here when available)*
> 🔗 https://your-ecovest-app-link.com

---

## 📸 Screenshots

| Dashboard                          | Analyzer                         | Invest                       |
| ---------------------------------- | -------------------------------- | ---------------------------- |
| ![Dashboard](assets/dashboard.png) | ![Analyzer](assets/analyzer.png) | ![Invest](assets/invest.png) |

---

## ✨ Features

### 🔐 Authentication

* Secure Login & Registration
* Session handling using localStorage

### 📊 ESG Analyzer

* Analyze companies using ESG scores
* Visualize data with interactive charts (Chart.js)

### 💼 Investment Options

* SIP (Systematic Investment Plans)
* Medical Insurance Plans
* ESG Funds

### 📈 Portfolio Management

* Add investments
* Delete investments
* View ESG score & carbon impact

### 📰 Smart News Feed

* Real-time ESG + Finance news
* Powered by GNews API

### 📚 Learn Section

* ESG concepts explained
* Accordion UI
* Interactive quiz with score & progress bar

### 🧭 Premium UI/UX

* VS Code–style sidebar navigation
* Dropdown menus with animation
* Smooth scrolling + active section highlight
* Hover effects & transitions

---

## 🧠 Tech Stack

### 💻 Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB (Mongoose)

### 📊 Libraries & APIs

* Chart.js (data visualization)
* GNews API (real-time news)

---

## 🏗️ System Architecture

```
Frontend (HTML/CSS/JS)
        ↓
REST APIs (Express.js)
        ↓
Backend Logic (Node.js)
        ↓
Database (MongoDB)
```

---

## 🔌 APIs Used

### 🔹 Internal APIs

| Endpoint         | Purpose             |
| ---------------- | ------------------- |
| `/api/auth`      | User authentication |
| `/api/portfolio` | Manage investments  |
| `/api/esg`       | ESG score analysis  |

### 🔹 External API

* **GNews API** → Fetch ESG + finance news

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/ecovest.git
cd ecovest
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run the Server

```
npx nodemon server/server.js
```

---

## 📁 Project Structure

```
EcoVest/
│
├── client/
│   ├── pages/
│   ├── css/
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── package.json
└── README.md
```

---

## 🌍 What is ESG?

ESG stands for:

* 🌱 Environmental → Climate impact, emissions
* 👥 Social → Employee welfare, diversity
* 🏢 Governance → Ethics, transparency

👉 It helps investors evaluate companies beyond just profit.

---

## 🎯 Project Motivation

EcoVest was built to address the growing need for **responsible investing**.

Traditional platforms focus only on returns, but EcoVest:

* Promotes sustainability 🌱
* Raises ESG awareness
* Helps users align money with values

---

## ⚠️ Limitations

* Uses basic authentication (localStorage)
* ESG data may be simulated
* Limited real-time financial data
* No AI recommendations yet

---

## 🚀 Future Enhancements

* 🔐 JWT Authentication
* 📊 Real-time stock APIs
* 🤖 AI-based investment suggestions
* ☁️ Cloud deployment (AWS / Vercel / Render)
* 📱 Mobile responsive improvements

---

## 🏆 Highlights

* Full-stack project
* Real-world use case
* Clean UI/UX (SaaS-style)
* API integration
* Data visualization

---

## 👨‍💻 Author

**Siddhant**
📌 EcoVest Developer

---

## ⭐ Show Your Support

If you like this project:

👉 Star ⭐ the repository
👉 Fork 🍴 it
👉 Share 💬 with others

---

## 💡 Final Thought

> "EcoVest is not just about investing money — it’s about investing in a better future." 🌍✨
