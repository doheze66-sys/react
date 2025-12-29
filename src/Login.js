import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Vérification des identifiants
    if (email === 'doheze66@gmail.com' && password === 'bonjour2026') {
      // Sauvegarde dans le localStorage pour l'authentification
      localStorage.setItem('isAuthenticated', 'true');
      history.push('/dashboard'); // Redirection vers le dashboard
    } else {
      alert('Email ou mot de passe incorrect');
    }
  };

  return (
    <div style={{ backgroundColor: '#87CEEB', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#FFD700', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ color: '#FFD700' }}>Connexion</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '10px', margin: '5px' }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '10px', margin: '5px' }}
          />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#FFD700', border: 'none', cursor: 'pointer' }}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
