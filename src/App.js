import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Header from './app/components/Header';
import styled from 'styled-components';
import Sidebar from './app/components/Sidebar';
import Chat from './app/components/Chat';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
