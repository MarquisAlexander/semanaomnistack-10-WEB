import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, [] );

  useEffect(() => {

  }, );
  
  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })
    
    setGithubUsername('');
    setTechs('');
  }

  return (
   <div id="App">
     <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
          <label htmlFor="github_username">Usuário do github</label>
          <input 
            name="github_username"
            id="username_github"
            required 
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
          <label htmlFor="techs">Teclologias</label>
          <input 
            name="techs"
            id="techs"
            required 
            value={techs}
            onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
          <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input 
            type="number"
            name="latitude"
            id="latitude"
            required value={latitude} 
            onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input 
            type="number"
            name="longitude"
            id="latitude"
            required value={longitude}
            onChange={e => setLongitude(e.target.value)}
            />
          </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
     </aside>

     <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/51330232?s=460&v=4" alt="Marquis Alexander"/>
              <div className="user-info">
                <strong>Marquis Alexander</strong>
                <span>ReactJS, React native, NodeJS</span>
              </div>
            </header>
            <p>Desenvolvedor mobile que adora aplicar seu conhecimento para resolver problemas, criar produtos incríveis e impactar vidas.
              <a href="https://github.com/MarquisAlexander">Acessar perfil no github</a>
            </p>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/51330232?s=460&v=4" alt="Marquis Alexander"/>
              <div className="user-info">
                <strong>Marquis Alexander</strong>
                <span>ReactJS, React native, NodeJS</span>
              </div>
            </header>
            <p>Desenvolvedor mobile que adora aplicar seu conhecimento para resolver problemas, criar produtos incríveis e impactar vidas.
              <a href="https://github.com/MarquisAlexander">Acessar perfil no github</a>
            </p>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/51330232?s=460&v=4" alt="Marquis Alexander"/>
              <div className="user-info">
                <strong>Marquis Alexander</strong>
                <span>ReactJS, React native, NodeJS</span>
              </div>
            </header>
            <p>Desenvolvedor mobile que adora aplicar seu conhecimento para resolver problemas, criar produtos incríveis e impactar vidas.
              <a href="https://github.com/MarquisAlexander">Acessar perfil no github</a>
            </p>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/51330232?s=460&v=4" alt="Marquis Alexander"/>
              <div className="user-info">
                <strong>Marquis Alexander</strong>
                <span>ReactJS, React native, NodeJS</span>
              </div>
            </header>
            <p>Desenvolvedor mobile que adora aplicar seu conhecimento para resolver problemas, criar produtos incríveis e impactar vidas.
              <a href="https://github.com/MarquisAlexander">Acessar perfil no github</a>
            </p>
          </li>
        </ul>
     </main>
   </div>
  );
}

export default App;
