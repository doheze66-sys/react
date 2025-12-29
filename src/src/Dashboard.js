import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  // Récupérer les données depuis localStorage
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem('appointments')) || []
  );
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [newAppointment, setNewAppointment] = useState('');
  const [newContact, setNewContact] = useState('');

  useEffect(() => {
    // Sauvegarder les données dans le localStorage à chaque changement
    localStorage.setItem('appointments', JSON.stringify(appointments));
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [appointments, contacts]);

  const handleAddAppointment = () => {
    setAppointments([...appointments, newAppointment]);
    setNewAppointment('');
  };

  const handleAddContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact('');
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/'; // Rediriger vers la page de login
  };

  return (
    <div style={{ backgroundColor: '#87CEEB', height: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#FFD700', fontWeight: 'bold' }}>Bienvenue sur le site de DETONATEUR LE DANSEUR</h1>

      <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: '#FFD700', border: 'none' }}>Se déconnecter</button>

      <h2 style={{ color: '#FFD700' }}>Rendez-vous</h2>
      <input
        type="text"
        placeholder="Ajouter un rendez-vous"
        value={newAppointment}
        onChange={(e) => setNewAppointment(e.target.value)}
        style={{ padding: '10px', margin: '5px' }}
      />
      <button onClick={handleAddAppointment} style={{ padding: '10px', backgroundColor: '#FFD700', border: 'none' }}>Ajouter</button>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>{appointment}</li>
        ))}
      </ul>

      <h2 style={{ color: '#FFD700' }}>Contacts</h2>
      <input
        type="text"
        placeholder="Ajouter un contact"
        value={newContact}
        onChange={(e) => setNewContact(e.target.value)}
        style={{ padding: '10px', margin: '5px' }}
      />
      <button onClick={handleAddContact} style={{ padding: '10px', backgroundColor: '#FFD700', border: 'none' }}>Ajouter</button>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact}</li>
        ))}
      </ul>

      {/* Ajouter une horloge */}
      <h2 style={{ color: '#FFD700' }}>Horloge</h2>
      <div style={{ color: '#FFD700' }}>
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Dashboard;
