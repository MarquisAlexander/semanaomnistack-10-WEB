import React from 'react';

import './global.css';
import './App.css';

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

          <label htmlFor=""></label>
          <input name="github_username" id="username_github" required></input>
        </form>
     </aside>
     <main>

     </main>
   </div>
  );
}

export default App;
