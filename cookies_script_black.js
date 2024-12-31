function insertCSS() {
  const style = document.createElement("style");
  style.textContent = `
       :root {
      --Primary-2: #ffffff; 
      --Secondary-1: #181818; 
      --Secondary-2: #555555; 
      --Color-1: #3941ff;
      --Color-4: #e0e0e0; 
    }
    
    body {
      background-color: #121212;
      color: var(--Primary-2);
    }
  
    .overlay {
        display: none; 
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8); 
        z-index: 999; 
    }
  
    .overlay.active {
        display: block;
    }
  
    .cookie-preferences {
      display: none; 
      margin: auto;
      padding: 30px;
      filter: drop-shadow(5px 15px 20px rgba(0, 0, 0, 0.25));
      max-width: 640px;
      flex-direction: column;
      color: var(--Primary-2);
      background: var(--Secondary-1);
      overflow: hidden;
      z-index: 1000;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    .cookie-banner.active,
    .cookie-preferences.active {
      display: flex; 
    }
    
    .cookie-container {
      width: 100%;
      justify-content: center;
    }
    
    .cookie-content {
      width: 100%;
      justify-content: start;
    }
  
    .cookie-header {
      align-items: center;
      gap: 17px;
      font: 600 30px/1 Poppins, sans-serif;
      justify-content: start;
      flex-wrap: wrap;
    }
  
    .cookie-banner {
        display: none;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        align-items: center;
        background: var(--Secondary-1);
        border-top: 3px solid var(--Color-1);
        box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.18);
        display: flex;
        gap: 40px 97px;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 25px 40px;
    }
  
    .cookie-message {
      color: var(--Color-4);
      align-self: stretch;
      flex: 1;
      flex-basis: 0%;
      margin: 0;
      font: 400 14px/20px Poppins, sans-serif;
    }
  
    .actions-wrapper {
      align-self: stretch;
      display: flex;
      min-width: 240px;
      align-items: center;
      gap: 64px;
      margin: 0;
    }
  
    .buttons-container {
      align-self: stretch;
      display: flex;
      min-width: 240px;
      align-items: center;
      gap: 13px;
      font: 14px/1 Poppins, sans-serif;
    }
  
    .settings-button {
      text-decoration: underline;
      border-radius: 4px;
      border: 2px solid var(--Color-4);
      color: var(--Color-4);
      font-weight: 400;
      padding: 7px 14px;
      background: transparent;
      cursor: pointer;
    }
  
    .accept-button {
      border-radius: 4px;
      background: var(--Color-1);
      color: var(--Secondary-4);
      font-weight: 600;
      padding: 7px 15px;
      border: none;
      cursor: pointer;
    }
  
    .close-icon-wrapper {
      align-self: stretch;
      display: flex;
      align-items: start;
      width: 21px;
      margin: auto 0;
    }
  
    .close-icon {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 21px;
    }
  
    @media (max-width: 991px) {
      .cookie-banner {
        padding: 0 20px;
      }
      
      .cookie-message {
        max-width: 100%;
      }
    }
  
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  
    .cookie-description {
      font-weight: 400;
      line-height: 20px;
      margin: 20px 0;
    }
  
    .cookie-actions {
      align-items: start;
      gap: 11px;
      color: var(--Secondary-1);
      justify-content: start;
      flex-wrap: wrap;
      margin: 20px 0;
    }
  
    .cookie-actions-preferences {
      display: flex;
      align-items: flex-end;
      gap: 11px;
      color: var(--Secondary-1);
      justify-content: flex-end;
      flex-wrap: wrap;
    }
  
    .cookie-button {
      border-radius: 2px;
      background: var(--Color-1);
      gap: 10px;
      overflow: hidden;
      padding: 7px 16px;
      border: none;
      color: var(--Secondary-1);
      font: 600 14px/1 Poppins, sans-serif;
      cursor: pointer;
    }
  
    .cookie-preferences-link {
      text-align: right;
      font-weight: 400;
      background-color: transparent;
      border: none;
      text-decoration: underline;
      font-size: 14px;
      cursor: pointer;
    }
  
    .header-wrapper {
      display: flex;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
    }
  
    .main-title {
      color: var(--Primary-2);
      flex: 1;
      font: 600 20px/1.1 Poppins, sans-serif;
    }
  
    .description-text {
      margin-top: 14px;
      width: 100%;
      color: var(--Primary-2);
      font: 400 14px/20px Poppins, sans-serif;
    }
  
    .preferences-list {
      margin-top: 14px;
      width: 100%;
    }
  
    .preference-item {
      width: 100%;
    }
  
    .preference-content {
      border: 2px solid var(--Secondary-2);
      padding: 15px 20px;
    }
  
    .preference-header {
      display: flex;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
    }
  
    .preference-title {
      color: var(--Primary-2);
      flex: 1;
      font: 600 14px/1 Poppins, sans-serif;
    }
  
    .checkbox-wrapper {
      border-radius: 4px;
      background-color: #616161;
      padding: 5px;
    }
  
    .preference-description {
      width: 537px;
      margin-top: 7px;
      color: var(--Primary-2);
      font: 400 14px/20px Poppins, sans-serif;
    }
  
    .actions-wrapper {
      display: flex;
      margin-top: 14px;
      align-items: center;
      gap: 27px;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
  
    .back-button {
      border-radius: 2px;
      background: var(--Secondary-1);
      color: var(--Primary-4);
      padding: 7px 26px;
      border: 2px solid var(--Color-4);
    }
  
    .allow-button {
      border-radius: 2px;
      background: var(--Color-1);
      color: var(--Secondary-4);
      padding: 7px 26px;
      border: none;
    }
  
    .top-rounded {
      border-radius: 10px 10px 0 0;
    }
  
    .bottom-rounded {
      border-radius: 0 0 10px 10px;
    }
  
    @media (max-width: 991px) {
      .preference-description {
        max-width: 100%;
      }
    }
      `;
  document.head.appendChild(style);
}

function insertHTML() {
  const div = document.createElement("div");
  div.innerHTML = `
        <!-- Coloque aqui todo o conteúdo HTML fornecido começando com as divs -->
        <div class="overlay" id="overlay"></div>
        <div id="cookie-banner" class="cookie-banner active" role="dialog" aria-labelledby="cookie-title">
          <p class="cookie-message">
              Este site usa cookies para melhorar sua experiência de navegação. Ao clicar em 'Aceitar', você concorda com o uso de TODOS os cookies. No entanto, você pode 'Configurar' suas preferências de cookies para fornecer um consentimento controlado.
          </p>
          <div class="actions-wrapper">
              <div class="buttons-container">
                <button class="settings-button" type="button" onclick="showPreferences()">Configuração de cookies</button>
                <button class="accept-button" type="button">Aceitar Cookies</button>
              </div>
              <div class="close-icon-wrapper">
                <img
                    src="https://sellflux.nyc3.digitaloceanspaces.com/sellflux/project_31/yfNomfKZppEg5fk4XzOOIMaDZHZB9mpJ.png"
                    alt="Fechar banner de cookies"
                    class="close-icon"
                    role="button"
                    tabindex="0"
                    onclick="showBanner()"
                />
              </div>
          </div>
        </div>
    
        <div class="cookie-preferences" id="cookiePreferences">
          <div class="cookie-container">
            <div class="header-wrapper">
              <h1 class="main-title">Gerenciar cookies</h1>
            </div>
            <p class="description-text">
              Cookies são pequenos textos que podem ser utilizados pelos sites para tornar a experiência do usuário mais eficiente. A lei estabelece que podemos armazenar cookies no seu dispositivo se forem estritamente necessários para o funcionamento deste site. Para todos os outros tipos de cookies, precisamos da sua permissão. Este site utiliza vários tipos de cookies. Alguns cookies são colocados por serviços de terceiros que aparecem nas nossas páginas.
            </p>
            <div class="preferences-list">
              <div class="preference-item">
                <div class="preference-content top-rounded">
                  <div class="preference-header">
                    <h2 class="preference-title">Necessários</h2>
                    <div class="checkbox-wrapper">
                      <input type="checkbox" checked disabled />
                    </div>
                  </div>
                  <p class="preference-description">
                    Cookies necessários ajudam a tornar um site utilizável, permitindo funções básicas como navegação de página e acesso a áreas seguras do site. O site não pode funcionar corretamente sem esses cookies.
                  </p>
                </div>
              </div>
              <div class="preference-item">
                <div class="preference-content">
                  <div class="preference-header">
                    <h2 class="preference-title">Estatísticos</h2>
                    <div class="checkbox-wrapper">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <p class="preference-description">
                    Cookies estatísticos ajudam os proprietários de sites a entender como os visitantes interagem com os sites, coletando e relatando informações anonimamente.
                  </p>
                </div>
              </div>
              <div class="preference-item">
                <div class="preference-content">
                  <div class="preference-header">
                    <h2 class="preference-title">Preferências</h2>
                    <div class="checkbox-wrapper">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <p class="preference-description">
                    Cookies de preferências permitem que um site se lembre de informações que mudam a maneira como o site se comporta ou parece, como o seu idioma preferido ou a região em que você está.
                  </p>
                </div>
              </div>
              <div class="preference-item">
                <div class="preference-content bottom-rounded">
                  <div class="preference-header">
                    <h2 class="preference-title">Marketing</h2>
                    <div class="checkbox-wrapper">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <p class="preference-description">
                    Cookies de marketing são usados para rastrear visitantes em sites. A intenção é exibir anúncios que sejam relevantes e envolventes para o usuário individual, portanto mais valiosos para editores e anunciantes independentes.
                  </p>
                </div>
              </div>
            </div>
            <div class="actions-wrapper">
              <button class="back-button" type="button" onclick="showBanner()">Fechar</button>
              <button class="allow-button" type="button">Salvar</button>
            </div>
          </div>
        </div>
      `;
  document.body.appendChild(div);
}

function setupCookieScripts() {
  let isPreferencesOpen = false;

  window.showPreferences = function () {
    if (!isPreferencesOpen) {
      document.getElementById("cookie-banner").classList.remove("active");
      document.getElementById("cookiePreferences").classList.add("active");
      document.getElementById("overlay").classList.add("active");
      isPreferencesOpen = true;
    }
  };

  window.showBanner = function () {
    document.getElementById("cookiePreferences").classList.remove("active");
    document.getElementById("cookie-banner").classList.add("active");
    document.getElementById("overlay").classList.remove("active");
    isPreferencesOpen = false;
  };
}

document.addEventListener("DOMContentLoaded", function () {
  insertCSS();
  insertHTML();
  setupCookieScripts();
});
