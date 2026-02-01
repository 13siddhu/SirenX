# 🚑 SirenX | Real-Time Emergency Response System

**SirenX** is a mission-critical, full-stack coordination platform designed to reduce emergency response times during the "Golden Hour." By connecting citizens, ambulances, and hospital admins through a real-time, offline-resilient architecture, SirenX ensures that help is dispatched instantly even in network-compromised environments.

---

## 🚀 Key Features

* **One-Tap SOS:** Minimalist citizen interface for instant emergency reporting.
* **Real-Time Coordination:** Bi-directional communication using **WebSockets (Socket.io)** for zero-latency alerts.
* **Offline Resilience (PWA):** Progressive Web App capabilities including Service Workers and IndexedDB for data persistence in "dead zones."
* **Live Admin Dashboard:** Centralized control room for dispatchers to track active incidents and monitor ambulance locations.
* **Geospatial Intelligence:** (In Progress) Using **PostGIS** to automatically identify and alert the nearest available responder.

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), Tailwind CSS, Lucide React
* **Backend:** Node.js, Custom Express Server
* **Real-Time:** Socket.io
* **Database:** PostgreSQL + PostGIS (Spatial queries)
* **PWA:** Service Workers, Manifest API, IndexedDB
* **Maps:** Leaflet.js / Google Maps API

---

## 📁 Project Structure

```
├── app/                # Next.js App Router (Citizen, Admin, Driver views)
├── components/         # Reusable UI (Map wrappers, SOS buttons)
├── hooks/              # Custom hooks for Geolocation and Socket logic
├── public/             # PWA Manifest and Service Workers
├── server.js           # Custom Node.js + Socket.io server
└── lib/                # Database configurations and utilities
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/sirenx.git
cd sirenx
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Configure Environment:

Create a `.env` file and add your database URL and any Map API keys.

### 4. Run the Development Server:

```bash
npm run dev
```

**Note:** This runs the custom `server.js` to enable WebSocket support.

---

## 🌍 Impact

In emergency medicine, a 1-minute delay in response can decrease survival rates by 7-10%. SirenX targets the elimination of manual coordination delays by automating the dispatch loop, potentially saving lives through data-driven efficiency.