# KeenKeeper

KeenKeeper is a friendship management web app built with React. It helps users keep track of friends, recent interactions, and communication habits through a simple and clean interface.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?logo=tailwindcss)
![DaisyUI](https://img.shields.io/badge/DaisyUI-UI-orange)

## Live Links

- Live Site: https://keenkeeper.netlify.app
- GitHub Repository: https://github.com/nafiz2024/Programming-Hero-Assignment-07

## Preview

<img src="./src/assets/README/fullpage.png" alt="KeenKeeper Home Preview">

## Key Features

- Browse all friends from JSON data
- View detailed information for each friend
- Show days since last contact
- Add `Call`, `Text`, and `Video` interactions
- Save timeline data in `localStorage`
- Automatically remove old interactions after 24 hours
- Search timeline items by any word
- Filter timeline by interaction type
- View communication stats in chart format
- Responsive design for different screen sizes

## Pages

### Home Page
- Shows all friends in card format
- Displays summary cards like total friends and monthly interactions

### Friend Details Page
- Shows profile information, tags, goal, and next due date
- Lets the user add quick interactions

### Timeline Page
- Shows all saved interactions
- Supports searching and filtering

### Stats Page
- Displays interaction data using charts

## Technologies Used

- React
- React Router
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- Recharts
- JavaScript
- JSON
- localStorage

## How It Works

1. Friend data loads from `public/FriendsData.json`.
2. The homepage shows all friend cards.
3. Clicking a card opens the friend details page.
4. Users can add interactions using quick action buttons.
5. Timeline data is saved in context and `localStorage`.
6. Stats update automatically based on timeline data.
7. Old interaction data is removed after 24 hours.

## Installation

Clone the project:



Go to the project folder:



Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Project Structure

```bash
KeenKeeper
├── public
│   └── FriendsData.json
├── src
│   ├── assets
│   ├── Components
│   │   ├── HomePage
│   │   ├── Shared
│   │   └── Ui
│   ├── Context
│   │   └── Context.jsx
│   ├── Layout
│   │   └── MainLayout.jsx
│   ├── Pages
│   │   ├── HomePage
│   │   ├── FriendsDetails
│   │   ├── Timeline
│   │   ├── Stats
│   │   └── ErrorPage
│   ├── Routes
│   │   └── Routes.jsx
│   ├── utils
│   │   └── dateUtils.js
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Screenshots

### Home Page
<img src="./src/assets/README/fullpage.png" alt="Home Page">

### Friend Details Page
<img src="./src/assets/README/idDetails.png" alt="Friend Details Page">

### Timeline Page
<img src="./src/assets/README/timeline.png" alt="Timeline Page">

### Stats Page
<img src="./src/assets/README/stats.png" alt="Stats Page">

## Future Improvements

- Add create and edit friend feature
- Add confirmation modal before delete
- Add backend database
- Add authentication
- Add dark mode
- Add more chart insights

## Author

**RS_Arafath**

- GitHub: https://github.com/nafiz2024
- LinkedIn: [https://www.linkedin.com/in/nafiz-alam04/](https://www.linkedin.com/in/rs-arafath/)
- Email: contact.arafath.bd@gmail.com

## Support


-------------------------------------------
# KeenKeeper

KeenKeeper is a React-based friendship management web app designed to help users track friends, log interactions, and analyze communication patterns in a clean and intuitive interface.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss)
![DaisyUI](https://img.shields.io/badge/DaisyUI-UI-orange)

---

## 🔗 Live Demo

- 🌐 Live Site: https://keen-keeper-oa1r.vercel.app/
- 💻 Repository: https://github.com/RS-Arafath/KeenKeeper.git

---

## 📸 Preview

![KeenKeeper Preview](./src/assets/README/fullpage.png)

---

## ✨ Features

- View all friends from structured JSON data
- Detailed friend profile view with metadata
- Track time since last interaction
- Log interactions (Call / Text / Video)
- Persistent timeline using `localStorage`
- Auto-cleanup of outdated interactions (24h rule)
- Smart search across timeline entries
- Filter interactions by type
- Visual analytics using charts
- Fully responsive UI across devices

---

## 📄 Pages Overview

### 🏠 Home
- Displays all friends in card layout
- Shows summary insights (total friends, activity overview)

### 👤 Friend Details
- Profile information with tags and details
- Quick action buttons for interactions

### 🕒 Timeline
- Interaction history log
- Search and filter support

### 📊 Stats
- Visual representation of user interaction data

---

## 🧰 Tech Stack

- React
- React Router
- Tailwind CSS
- DaisyUI
- Recharts
- React Icons
- React Toastify
- JavaScript (ES6+)
- LocalStorage API
- JSON Data Handling

---

## ⚙️ How It Works

1. Friend data is loaded from `public/FriendsData.json`
2. Home page renders all friend cards
3. Selecting a friend navigates to details page
4. Users log interactions (Call / Text / Video)
5. Interaction data is stored in Context + LocalStorage
6. Stats page dynamically updates based on timeline data
7. System automatically removes data older than 24 hours

---

## 1. Clone the repository
### Installation

**Clone the project:**

Go to the project folder:

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```
---
## Project Structure

```bash
KeenKeeper

├── public/
│   └── FriendsData.json
├── src/
│   ├── assets/
│   ├── Components/
│   ├── Context/
│   ├── Layout/
│   ├── Pages/
│   ├── Routes/
│   ├── utils/
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```
---
### Home Page
<img src="./src/assets/README/fullpage.png" alt="Home Page">

### Friend Details Page
<img src="./src/assets/README/idDetails.png" alt="Friend Details Page">

### Timeline Page
<img src="./src/assets/README/timeline.png" alt="Timeline Page">

### Stats Page
<img src="./src/assets/README/stats.png" alt="Stats Page">