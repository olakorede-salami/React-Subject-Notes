import React from 'react';
import './App.css';
import Header from './Components/Header'
import Subjects from './Components/Subjects'


function App(){
  return(
    <div className="App">
  <header>
    <Header />
  </header>
  <div className="subject">
    <Subjects name = "English Literature"/>
    <Subjects name = "English Language"/>
    <Subjects name = "Maths"/>
    <Subjects name = "Chemistry"/>
    <Subjects name = "Physics"/>
    <Subjects name = "Biology"/>
    <Subjects name = "RE"/>
    <Subjects name = "History"/>
    <Subjects name = "DT"/>
  </div>
  </div>
  )
}


export default App;
