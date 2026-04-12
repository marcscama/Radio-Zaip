import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';
import SearchPanel from './SearchPanel';
import RealTimeStream from './RealTimeStream';
import PlaylistGenerator from './PlaylistGenerator';

const socket = io('http://your-socket-server-url');

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set up socket connection and event listeners
    socket.on('dataUpdate', (newData) => {
      setData(newData);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/search" component={SearchPanel} />
          <Route path="/stream" component={RealTimeStream} />
          <Route path="/playlist" component={PlaylistGenerator} />
          <Route path="/" exact component={() => <h1>Welcome to the Radio-Zaip App</h1>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;