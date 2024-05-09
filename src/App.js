import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file

export default function App() {
  return (
    <div className="App">
    <Header />
      <main className="main-content">
        {/* Your page content goes here */}
        <Footer />
      </main>
    </div>
  );
}

