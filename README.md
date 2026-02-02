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
SirenX/
├── app/                        # Next.js App Router (Frontend + API)
│   ├── (auth)/                 # Group for Login/Signup (Drivers & Admins)
│   │   ├── login/page.jsx
│   │   └── signup/page.jsx
│   ├── citizen/                # The "One-Tap SOS" Interface
│   │   └── page.jsx
│   ├── driver/                 # Responder view (Navigation & Status)
│   │   └── page.jsx
│   ├── admin/                  # Live Dashboard for Dispatchers
│   │   ├── page.jsx
│   │   └── analytics/page.jsx
│   ├── api/                    # Backend API Routes
│   │   ├── sos/route.js        # Logic for creating new emergencies
│   │   ├── ambulances/route.js # Logic for fetching nearby units (PostGIS)
│   │   └── auth/route.js       # JWT / Session management
│   ├── layout.js               # Global Root Layout
│   └── page.js                 # Landing Page
├── components/                 # Reusable UI Blocks
│   ├── Map/                    # Leaflet/Google Maps wrapper
│   │   ├── MapContainer.jsx
│   │   └── MarkerIcon.jsx
│   ├── Dashboard/              # Admin UI components
│   │   ├── EmergencyCard.jsx
│   │   └── StatsPanel.jsx
│   └── UI/                     # Shared Atomic components
│       ├── SOSButton.jsx
│       └── OfflineBadge.jsx
├── hooks/                      # Custom Logic (The "Smart" part)
│   ├── useSocket.js            # Socket.io connection manager
│   ├── useGeolocation.js       # Real-time GPS tracking logic
│   └── useOfflineSync.js       # IndexedDB auto-sync logic
├── lib/                        # Backend Utilities
│   ├── db.js                   # PostgreSQL (Prisma or PG-Pool) setup
│   ├── socket.js               # Socket.io server-side config
│   └── utils.js                # Helper functions (distance calc, etc)
├── public/                     # Static Assets & PWA files
│   ├── icons/                  # App icons for different devices
│   ├── manifest.json           # Crucial for PWA installation
│   └── sw.js                   # Service Worker (Offline caching logic)
├── store/                      # Global State (Zustand or Redux)
│   └── useEmergencyStore.js    # Shared state between components
├── server.js                   # Custom Node.js/Socket.io Server
└── .env                        # Database URLs & API Keys
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository:

```bash
git clone https://github.com/13siddhu/SirenX.git
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