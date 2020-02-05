import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologías</label>
            <input name="techs" id="techs" required/>
          </div>
          
          <div className="input-group"> 
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://secure.gravatar.com/avatar/86b9e17da2d04a00fa59752498a0056e?s=180&d=identicon" alt="Guy fawkes"/>
              <div className="user-info">
                <strong>Guy Fawkes</strong>
                <span>Unity3D, reactJS, React Native</span>
              </div>
            </header>
            <p>Indie game developer, works with Unity3D and likes to test new frameworks and create random projects on the spare time.</p>
            <a href="https://github.com/igorfel">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://secure.gravatar.com/avatar/86b9e17da2d04a00fa59752498a0056e?s=180&d=identicon" alt="Guy fawkes"/>
              <div className="user-info">
                <strong>Guy Fawkes</strong>
                <span>Unity3D, reactJS, React Native</span>
              </div>
            </header>
            <p>Indie game developer, works with Unity3D and likes to test new frameworks and create random projects on the spare time.</p>
            <a href="https://github.com/igorfel">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://secure.gravatar.com/avatar/86b9e17da2d04a00fa59752498a0056e?s=180&d=identicon" alt="Guy fawkes"/>
              <div className="user-info">
                <strong>Guy Fawkes</strong>
                <span>Unity3D, reactJS, React Native</span>
              </div>
            </header>
            <p>Indie game developer, works with Unity3D and likes to test new frameworks and create random projects on the spare time.</p>
            <a href="https://github.com/igorfel">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://secure.gravatar.com/avatar/86b9e17da2d04a00fa59752498a0056e?s=180&d=identicon" alt="Guy fawkes"/>
              <div className="user-info">
                <strong>Guy Fawkes</strong>
                <span>Unity3D, reactJS, React Native</span>
              </div>
            </header>
            <p>Indie game developer, works with Unity3D and likes to test new frameworks and create random projects on the spare time.</p>
            <a href="https://github.com/igorfel">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
