import React from 'react';
import { Router } from '@reach/router';

import './index.css';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <Router>
      <Home exact path="/" />
      <ChatRoom exact path="/:roomId" />
    </Router>
  );
}

export default App;
