# HSMeet 💬

A real-time video conferencing web application — just like Zoom!  
Built with WebRTC, Socket.IO, and the MERN stack, HSMeet allows users to create and join secure video meetings with ease.

---

## 🚀 Features

- 🔒 **Secure Video & Audio Calls** — Powered by WebRTC
- 🧑‍🤝‍🧑 **Create & Join Meetings** with unique meeting IDs
- 💬 **Real-time Chat** during meetings
- 📶 **Peer-to-Peer Connection** via WebRTC and Socket.IO signaling
- 🧠 **User Presence Detection**
- 🖥️ **Responsive UI** for both desktop and mobile
- 🎥 **Media Controls**: Mute/Unmute mic, enable/disable camera
- 💡 **Auto-generated Meeting IDs**

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **MongoDB** | Database for storing users/sessions (if any) |
| **Express.js** | Backend web framework |
| **React.js** | Frontend UI framework |
| **Node.js** | JavaScript runtime |
| **Socket.IO** | Real-time bidirectional communication |
| **WebRTC** | Core tech for video/audio streaming |
| **Material UI** | For React components |

---

## 📁 Project Structure

HSMeet/
- ├── backend/
- │   ├── src/
- │   │   ├── controllers/        # Handles business logic
- │   │   ├── models/             # MongoDB models/schemas
- │   │   └── routes/             # API routes
- │   ├── .env                    # Environment variables
- │   ├── app.js                  # Entry point of backend
- │   ├── package.json
- │   └── package-lock.json
- │
- ├── frontend/
- │   ├── public/                 # Static assets
- │   ├── src/
- │   │   ├── contexts/           # React context (e.g., auth, meeting state)
- │   │   ├── pages/              # React page components (Home, Room, etc.)
- │   │   ├── styles/             # Custom CSS files
- │   │   ├── utils/              # Helper functions/utilities
- │   │   ├── App.js              # Main React app
- │   │   ├── App.test.js
- │   │   ├── environment.js      # API URLs or ENV config
- │   │   ├── index.js            # React DOM render entry point
- │   │   ├── index.css
- │   │   ├── reportWebVitals.js
- │   │   └── setupTests.js
- │   ├── package.json
- │   └── package-lock.json
- │
- ├── .gitignore

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/himanshusssingh/HSMeet.git
```
cd HSMeet

### 2. Setup Backend
cd backend  
npm install  

### 3. Setup Frontend
cd ../frontend  
npm install  

### 4. Run the App Locally  
Start Backend  
- cd backend  
- npm run dev  

Start Frontend  
- cd frontent  
- npm start  

## 🌐 Deployment
You can deploy the app using:  
Render / Railway (for backend)  
Vercel / Netlify (for frontend)  



## 🙋‍♂️ Author  
Himanshu Singh  
📧 Email:  ```bash himanshusingh39397 ```  
🔗 LinkedIn: ```bash https://www.linkedin.com/in/himanshu-singh-325438291/ ```  


## ⭐ Support  
If you like this project, don’t forget to ⭐ the repo!
