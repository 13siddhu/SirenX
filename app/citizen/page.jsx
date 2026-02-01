"use client"
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { AlertCircle, CheckCircle } from 'lucide-react';

let socket;

export default function CitizenPage() {
  const [status, setStatus] = useState('IDLE'); // IDLE, HELP_SENT

  useEffect(() => {
    socket = io();
    return () => socket.disconnect();
  }, []);

  const sendSOS = () => {
    setStatus('SENDING');
    navigator.geolocation.getCurrentPosition((pos) => {
      const data = { lat: pos.coords.latitude, lng: pos.coords.longitude, type: 'Medical' };
      socket.emit('emergency-trigger', data);
      setStatus('HELP_SENT');
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-6 text-center">
      {status === 'IDLE' ? (
        <>
          <h1 className="text-4xl font-black text-red-600 mb-6">EMERGENCY SOS</h1>
          <button onClick={sendSOS} className="w-64 h-64 bg-red-600 rounded-full shadow-2xl animate-pulse text-white font-bold text-3xl active:scale-95 transition-all">
            TAP FOR HELP
          </button>
        </>
      ) : (
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Help is on the way!</h2>
          <p className="text-gray-500 mt-2">The nearest ambulance has been notified.</p>
        </div>
      )}
    </div>
  );
}