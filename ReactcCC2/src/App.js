import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

import MainApp from './Mainapp';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login

  return (
    <Router>
      <CssBaseline />
      <MainApp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
};

export default App;
