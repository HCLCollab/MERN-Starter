import { useEffect, useState } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

function App() {
  const [message, setMessage] = useState("Connecting to API...");

  useEffect(() => {
    const fetchStarterMessage = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMessage(data.message ?? "API connected successfully");
      } catch (error) {
        console.error("Failed to load API message:", error);
        setMessage("Unable to connect to backend");
      }
    };

    fetchStarterMessage();
  }, []);

  return (
    <main className="app-shell">
      <section className="card">
        <span className="badge">Starter</span>
        <h1>MERN Starter</h1>
        <p className="subtitle">
          A clean full-stack setup with React + Express + TypeScript.
        </p>
        <div className="status-panel">
          <strong>API status:</strong>
          <span>{message}</span>
        </div>
      </section>
    </main>
  );
}

export default App;
