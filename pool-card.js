class LampStatusCard extends HTMLElement {
    setConfig(config) {
      if (!config.entity) {
        throw new Error('You need to define an entity');
      }
      this.config = config;
    }
  
    set hass(hass) {
      const entity = hass.states[this.config.entity];
      const card = document.createElement('ha-card');
      card.header = 'Lamp Status';
      card.innerHTML = `
        <div class="card-content">
          The lamp is ${entity.state}
        </div>
      `;
      this.appendChild(card);
    }
  
    getCardSize() {
      return 1;
    }
  }
  
  customElements.define('lamp-status-card', LampStatusCard);
  