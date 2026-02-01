"use client"
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { MapPin, Clock, User, Bell } from "lucide-react";

let socket;

export default function AdminPanel() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Connect to the custom server.js
    socket = io();

    // Listen for the SOS event broadcasted by the server
    socket.on("receive-sos", (data) => {
      console.log("New Alert Received:", data);
      
      // Add the new alert to the top of the list
      setAlerts((prevAlerts) => [
        { ...data, id: Math.random().toString(36).substr(2, 9) },
        ...prevAlerts
      ]);

      // Play an alert sound (Optional but helpful for admins)
      const audio = new Audio("/alert-sound.mp3");
      audio.play().catch(e => console.log("Audio play blocked by browser"));
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <header className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Bell className="text-red-500 animate-pulse" />
          SirenX Control Room
        </h1>
        <div className="text-sm bg-slate-800 px-4 py-2 rounded-full text-slate-400">
          Active Alerts: {alerts.length}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alerts.length === 0 ? (
          <p className="text-slate-500 italic col-span-full text-center py-20 border-2 border-dashed border-slate-800 rounded-xl">
            Waiting for emergency signals...
          </p>
        ) : (
          alerts.map((alert) => (
            <div key={alert.id} className="bg-slate-800 border-l-4 border-red-600 p-6 rounded-xl shadow-lg hover:bg-slate-750 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-red-600/20 p-2 rounded-lg">
                  <MapPin className="text-red-500" />
                </div>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock size={12} /> {alert.timestamp}
                </span>
              </div>
              
              <h3 className="font-bold text-lg mb-2">Emergency Reported</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p className="flex justify-between">
                  <span>Latitude:</span> <span className="text-white font-mono">{alert.lat.toFixed(4)}</span>
                </p>
                <p className="flex justify-between">
                  <span>Longitude:</span> <span className="text-white font-mono">{alert.lng.toFixed(4)}</span>
                </p>
              </div>

              <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors">
                DISPATCH NOW
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}