import React, { useState } from 'react';
import './app.scss';
//import { Repo } from './components/Repo';
import  WelcomePage from './components/WelcomePage'

export const App: React.FC = () => {

  const [userName, setUserName] = useState<string>("");
  
  return (
    <div className='App'>
      <WelcomePage userName={userName} setUserName={setUserName}/>
    </div>
  )
}