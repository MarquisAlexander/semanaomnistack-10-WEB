import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

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

     </main>
   </div>
  );
}

export default App;
