// app/page.js
"use client"
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

let socket;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    socket = io();
    return () => socket.disconnect();
  }, []);

  const handleSOS = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition((pos) => {
      const data = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        timestamp: new Date().toLocaleTimeString()
      };
      socket.emit("send-sos", data);
      setLoading(false);
      setSent(true);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6">
      <h1 className="text-5xl font-black text-red-600 mb-2 italic">SIRENX</h1>
      <p className="text-gray-500 mb-12">Emergency Response System</p>
      
      {!sent ? (
        <button 
          onClick={handleSOS}
          disabled={loading}
          className="w-72 h-72 bg-red-600 rounded-full shadow-[0_0_50px_rgba(220,38,38,0.5)] flex items-center justify-center text-white font-bold text-4xl active:scale-90 transition-all border-8 border-red-200"
        >
          {loading ? "LOCATING..." : "SOS"}
        </button>
      ) : (
        <div className="text-center animate-bounce">
          <div className="text-6xl mb-4 text-green-500">✅</div>
          <h2 className="text-2xl font-bold">Help is coming!</h2>
          <p className="text-gray-500">Dispatchers are tracking your location.</p>
        </div>
      )}
    </div>
  );
}