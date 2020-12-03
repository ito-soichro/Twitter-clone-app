import React from 'react';
import './App.css';
import {
  RecoilRoot,
} from 'recoil';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="app">
      <RecoilRoot>
        <Sidebar />
        <Feed />
        <RightSide />
      </RecoilRoot>
    </div>
  );
}


export default App;
