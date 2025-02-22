import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <link rel='preload' as='image' href='assets/heart.png'/>
      <link rel='preload' as='image' href='assets/rose.png'/>
      <link rel='preload' as='image' href='assets/rose.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle1.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle2.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle3.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle4.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle5.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle6.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle7.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle8.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle9.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle10.jpg'/>
      <link rel='preload' as='image' href='assets/explosionParticles/particle11.jpg'/>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
