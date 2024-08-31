// src/App.js
import React from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './App.css'; // Import CSS for calendar styling

const App = () => {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content grid with QR code and sidebar */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#f5e6ff', // Very light purple color
          minHeight: '100vh', // Ensure it covers the full height of the viewport
          padding: 3, // Add some padding around the content
        }}
      >
        <MainContent />
      </Container>
    </div>
  );
};

export default App;
