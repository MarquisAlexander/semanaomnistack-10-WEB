import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
   <div id="App">
     <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
          <label htmlFor="github_username">Usuário do github</label>
          <input name="github_username" id="username_github" required></input>
          </div>
          <div class="input-block">
          <label htmlFor="techs">Teclologias</label>
          <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
          <div class="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" required></input>
          </div>

          <div class="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="latitude" required></input>
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
